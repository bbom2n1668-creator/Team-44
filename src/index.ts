import keywords from "../keywords.json";

export default {
  async fetch(request: Request): Promise<Response> {
    // CORS 에러 방지를 위한 헤더 설정
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-mcp-protocol-version"
    };

    // 브라우저 및 클라이언트의 Preflight(OPTIONS) 요청 처리
    if (request.method === "OPTIONS") {
      return new Response(null, { headers, status: 204 });
    }

    try {

      // 1. MCP 프로토콜 초기화 및 기능 조회 단계 (GET / 또는 특정 경로)
      if (request.method === "GET") {
        return new Response(
          JSON.stringify({
            mcpVersion: "2026-6-12",
            capabilities: { tools: {} },
            serverInfo: { name: "my-first-mcp", version: "1.0.0" }
          }),
          { headers, status: 200 }
        );
      }

      // 2. 핵심 로직 처리 단계 (POST 요청)
      if (request.method === "POST") {
        const body: any = await request.json();

        // 2-0. MCP 핸드셰이크 초기화
        if (body.method === "initialize") {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id: body.id,
              result: {
                protocolVersion: "2026-6-12",
                capabilities: { tools: {} },
                serverInfo: { name: "my-first-mcp", version: "1.0.0" }
              }
            }),
            { headers, status: 200 }
          );
        }

        // 2-a. 클라이언트가 사용 가능한 도구(Tools) 목록을 요청할 때
        if (body.method === "tools/list") {
          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id: body.id,
              result: {
                tools: [
                  {
                    name: "get_fillet_r",
                    description: "감성 키워드를 Fillet R값(mm)으로 변환합니다.",
                    inputSchema: {
                      type: "object",
                      properties: {
                        keyword: {
                          type: "string",
                          description: "감성 형용사 (예: '부드러운', '단단한')"
                        }
                      },
                      required: ["keyword"]
                    }
                  },
                  {
                    name: "get_chamfer_c",
                    description: "감성 키워드를 Chamfer C값(mm)으로 변환합니다.",
                    inputSchema: {
                      type: "object",
                      properties: {
                        keyword: {
                          type: "string",
                          description: "감성 형용사 (예: '예리한', '강인한')"
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

        // 2-b. 클라이언트가 실제로 도구(Tool)를 실행했을 때
        if (body.method === "tools/call") {
          const { name, arguments: args } = body.params;
          const keyword = args?.keyword?.trim();

          // 툴 이름에 따라 fillet 또는 chamfer 테이블 선택
          const table = name === "get_fillet_r"
            ? keywords.fillet
            : name === "get_chamfer_c"
            ? keywords.chamfer
            : null;

          if (!table) {
            return new Response(
              JSON.stringify({
                jsonrpc: "2.0",
                id: body.id,
                error: { code: -32601, message: `Unknown tool: ${name}` }
              }),
              { headers, status: 200 }
            );
          }

          const value = table[keyword as keyof typeof table];
          const text = value !== undefined
            ? `${value}`
            : `'${keyword}'를 찾을 수 없습니다. 등록된 키워드: ${Object.keys(table).join(", ")}`;

          return new Response(
            JSON.stringify({
              jsonrpc: "2.0",
              id: body.id,
              result: {
                content: [{ type: "text", text }],
                isError: value === undefined
              }
            }),
            { headers, status: 200 }
          );
        }
      }

      // 정의되지 않은 요청에 대한 예외 처리
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), { headers, status: 405 });

    } catch (error: any) {
      // 서버 내부 에러 발생 시 처리
      return new Response(
        JSON.stringify({ jsonrpc: "2.0", error: { code: -32603, message: error.message } }),
        { headers, status: 500 }
      );
    }
  }
};
