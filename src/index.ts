import keywords from "../keywords.json";

// Cloudflare Workers 표준 규격에 맞춘 타입 정의
interface Env {}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // 1. 브라우저 및 클라이언트 전처리(CORS) 허용 설정
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-mcp-protocol-version"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 });
    }

    try {
      // 2. 초기 접속 확인 및 핸드셰이크 단계 (GET 요청 처리)
      if (request.method === "GET") {
        return new Response(
          JSON.stringify({
            mcpVersion: "2024-11-05",
            capabilities: {
              tools: {} // 본 서버는 도구(Tools) 기능을 탑재했음을 AI에게 선언
            },
            serverInfo: {
              name: "fillet-chamfer-mcp-edu",
              version: "1.0.0"
            }
          }),
          { headers, status: 200 }
        );
      }

      // 3. mcp-remote 브릿지가 전달하는 실제 MCP 요청 처리 (POST 요청)
      if (request.method === "POST") {
        const body: any = await request.json();

        // 3-a. 클라이언트(Claude)가 사용 가능한 도구 목록을 보여달라고 할 때
        if (body.method === "tools/list") {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id: body.id,
              result: {
                tools: [
                  {
                    name: "get_mechanical_guideline",
                    description: "브랜드 컨셉 키워드(sharp, soft, matte 등)에 맞는 기계가공(Fillet/Chamfer) 수치 가이드라인을 조회합니다.",
                    inputSchema: {
                      type: "object",
                      properties: {
                        keyword: {
                          type: "string",
                          description: "조회할 디자인 감성 키워드 (예: sharp, soft, matte, fillet, chamfer)"
                        }
                      },
                      required: ["keyword"]
                    }
                  }
                ]
              }
            }),
            { headers, status: 200 }
          );
        }

        // 3-b. AI가 실제로 판단하여 도구(Tool)를 실행하고 수치를 물어볼 때
        if (body.method === "tools/call") {
          const { keyword } = body.params?.arguments || {};
          const lowerKeyword = keyword ? keyword.toLowerCase().trim() : "";

          // keywords.json에 등록된 데이터와 매칭 시도
          const matchedData = keywords[lowerKeyword as keyof typeof keywords];

          let responseText = "";
          if (matchedData) {
            responseText = `[${matchedData.description}]\n${matchedData.content}`;
          } else {
            responseText = `'${keyword}'에 매칭되는 디자인 규칙이 아직 등록되지 않았습니다. 현재 활용 가능한 키워드 목록: ${Object.keys(keywords).join(", ")}`;
          }

          // MCP JSON-RPC 표준 규격에 맞춘 최종 결과 반환
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id: body.id,
              result: {
                content: [
                  {
                    type: "text",
                    text: responseText
                  }
                ],
                isError: false
              }
            }),
            { headers, status: 200 }
          );
        }
      }

      // 지정되지 않은 엉뚱한 요청이 올 때 예외 처리
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), { headers, status: 405 });

    } catch (error: any) {
      // 혹시 모를 내부 로직 오타 발생 시 에러 추적용 반환
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          error: { code: -32603, message: error.message }
        }),
        { headers, status: 500 }
      );
    }
  }
};
