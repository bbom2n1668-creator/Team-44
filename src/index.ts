<!DOCTYPE html><html class="dark" lang="ko"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>FIREWAVE | 디지털 캠프파이어 스피커</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&amp;family=Space+Grotesk:wght@500&amp;family=Be+Vietnam+Pro:wght@400;500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary-fixed-dim": "#ffb868",
                    "outline-variant": "#5a4136",
                    "primary-fixed-dim": "#ffb693",
                    "primary-container": "#ff6b00",
                    "surface-variant": "#353534",
                    "tertiary-container": "#ff6669",
                    "surface-container-lowest": "#0e0e0e",
                    "outline": "#a98a7d",
                    "surface-dim": "#131313",
                    "on-background": "#e5e2e1",
                    "on-secondary-container": "#653c00",
                    "primary": "#ffb693",
                    "on-tertiary-fixed": "#410007",
                    "on-surface-variant": "#e2bfb0",
                    "surface-container": "#201f1f",
                    "tertiary-fixed": "#ffdad8",
                    "tertiary": "#ffb3b1",
                    "inverse-surface": "#e5e2e1",
                    "inverse-primary": "#a04100",
                    "on-secondary": "#482900",
                    "on-primary-container": "#572000",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#690011",
                    "on-surface": "#e5e2e1",
                    "surface": "#131313",
                    "primary-fixed": "#ffdbcc",
                    "on-primary-fixed-variant": "#7a3000",
                    "secondary-fixed": "#ffddbb",
                    "background": "#131313",
                    "surface-container-high": "#2a2a2a",
                    "on-primary-fixed": "#351000",
                    "secondary-container": "#fe9d00",
                    "on-tertiary": "#680011",
                    "surface-bright": "#3a3939",
                    "tertiary-fixed-dim": "#ffb3b1",
                    "surface-container-low": "#1c1b1b",
                    "on-secondary-fixed-variant": "#673d00",
                    "on-tertiary-fixed-variant": "#92001c",
                    "on-error": "#690005",
                    "surface-tint": "#ffb693",
                    "inverse-on-surface": "#313030",
                    "on-secondary-fixed": "#2b1700",
                    "surface-container-highest": "#353534",
                    "on-error-container": "#ffdad6",
                    "secondary": "#ffc483",
                    "on-primary": "#561f00",
                    "error": "#ffb4ab"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "24px",
                    "container-max": "1440px",
                    "unit": "4px",
                    "margin-mobile": "20px",
                    "margin-desktop": "80px"
            },
            "fontFamily": {
                    "headline-md": ["Plus Jakarta Sans"],
                    "label-sm": ["Space Grotesk"],
                    "body-md": ["Be Vietnam Pro"],
                    "body-lg": ["Be Vietnam Pro"],
                    "headline-lg": ["Plus Jakarta Sans"],
                    "headline-xl": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "700"}],
                    "headline-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "0.05em", "fontWeight": "800"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #0A0A0A;
            color: #e5e2e1;
            scroll-behavior: smooth;
            overflow-x: hidden;
        }

        .grain-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.03;
            background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
        }

        .radial-glow {
            position: fixed;
            top: -20%;
            right: -10%;
            width: 60vw;
            height: 60vw;
            background: radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%);
            z-index: -1;
            pointer-events: none;
        }

        .glass-panel {
            background: rgba(20, 20, 20, 0.6);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            border-top: 1px solid rgba(255, 182, 147, 0.2);
            border-left: 1px solid rgba(255, 182, 147, 0.1);
        }

        .pixel-fire {
            font-family: 'Courier New', monospace;
            letter-spacing: -2px;
            color: #ff6b00;
            text-shadow: 0 0 10px #ff6b00;
        }

        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        .hover-halo:hover {
            box-shadow: 0 0 30px rgba(255, 107, 0, 0.4);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .metallic-border {
            border: 1px solid rgba(169, 138, 125, 0.3);
        }
    </style>
</head>
<body class="font-body-md selection:bg-primary-container selection:text-white">
<div class="grain-overlay"></div>
<div class="radial-glow"></div>
<!-- TopNavBar -->
<nav class="fixed top-0 left-0 w-full flex justify-between items-center px-margin-desktop py-6 z-50 bg-surface/10 backdrop-blur-xl border-b border-on-surface-variant/20 shadow-2xl">
<div class="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">FIREWAVE</div>
<div class="hidden md:flex gap-12">
<a class="font-label-sm text-label-sm text-primary font-bold border-b-2 border-primary pb-1" href="#info">제품 정보</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#features">주요 기능</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#story">스토리</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#specs">기술 사양</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-label-sm text-label-sm font-bold scale-95 active:scale-90 transition-all hover:bg-primary-container/90 hover-halo">지지금 구매하기</button>
</nav>
<!-- Hero Section -->
<header class="relative w-full h-screen flex flex-col justify-center items-center text-center px-margin-desktop overflow-hidden">
<div class="absolute inset-0 z-0">
<img alt="Firewave Speaker Hero" class="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXYoV5ckqX-6qkcCvUohLFZmxvsA8RKaaBPqJhtTF94auRpqJMZBVKdBpBUZuUlu82nH6ipbhlUoGbIyLdCEnKncHK6-CgM1D2KlzCA24Z-s3Lrqcv3yMEauFqHG1LZSg6hv9cyLzZB6UjPTuGgPW6mdDIZqAUniUN4olNJbdaMxeQWEHN55wMeYI9Ol8Yee8IdudZOScw3D9f7zfZ86a6CBpScXkiq7WCUV7PqX5PDSS9IzQPwLAFFVkNuNUVqlwepUF1Exn-Lve">
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
</div>
<div class="relative z-10 space-y-6 max-w-4xl">
<h1 class="font-headline-xl text-headline-xl text-on-surface tracking-widest drop-shadow-lg">
                FIREWAVE SPEAKER
            </h1>
<p class="font-headline-md text-headline-md text-primary tracking-tight">
                소리가 디지털 모닥불로 변하는 새로운 경험
            </p>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
                몰입형 사운드, OLED 불꽃 시각화, 랜턴 디자인이 결합된 감성적 캠핑 오디오 디바이스
            </p>
<div class="flex gap-4 justify-center pt-8">
<button class="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-label-sm text-label-sm font-black tracking-widest hover-halo transition-all uppercase">컨셉 보기</button>
<button class="glass-panel text-on-surface px-10 py-4 rounded-xl font-label-sm text-label-sm font-black tracking-widest hover:bg-white/10 transition-all uppercase border border-outline-variant/30">기능 탐색</button>
</div>
</div>
<div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
<span class="font-label-sm text-label-sm uppercase tracking-widest">Scroll to explore</span>
<span class="material-symbols-outlined">expand_more</span>
</div>
</header>
<!-- Project Overview -->
<section class="py-32 px-margin-desktop space-y-20 relative" id="info">
<div class="max-w-4xl mx-auto text-center reveal active">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-8">프로젝트 개요</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                캠핑의 가장 깊은 정취는 '불멍'에서 나옵니다. 우리는 타오르는 불꽃의 불규칙한 리듬을 사운드와 결합하여, 디지털 기술이 전할 수 있는 가장 아날로그적인 평온함을 설계했습니다. FIREWAVE는 단순한 스피커를 넘어 당신의 캠프 사이트에 따스한 영혼을 불어넣습니다.
            </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter reveal active">
<div class="glass-panel p-12 rounded-2xl flex flex-col items-center gap-6 group hover:bg-primary-container/5 transition-all">
<span class="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">camping</span>
<h3 class="font-headline-md text-headline-md">캠핑 감성</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-center">아웃도어 환경에 최적화된 러기드한 디자인과 따뜻한 조도.</p>
</div>
<div class="glass-panel p-12 rounded-2xl flex flex-col items-center gap-6 group hover:bg-primary-container/5 transition-all">
<span class="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform" style="font-variation-settings: 'FILL' 1;">equalizer</span>
<h3 class="font-headline-md text-headline-md">사운드 시각화</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-center">음악의 파형에 실시간으로 반응하는 불꽃 애니메이션 시스템.</p>
</div>
<div class="glass-panel p-12 rounded-2xl flex flex-col items-center gap-6 group hover:bg-primary-container/5 transition-all">
<span class="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">local_fire_department</span>
<h3 class="font-headline-md text-headline-md">디지털 모닥불</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-center">OLED 디스플레이로 구현된 리얼리티 넘치는 픽셀 아트 플레임.</p>
</div>
</div>
</section>
<!-- Core Design Direction -->
<section class="py-32 bg-surface-container-low px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-20 text-center reveal active">핵심 디자인 방향</h2>
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 reveal active">
<div class="relative overflow-hidden rounded-xl h-80 group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A macro shot of a sleek industrial metallic object with sharp rectangular edges and matte grey finish, professional studio lighting with orange highlights on the corners." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTpUOuD2s7uYEWFxOAa8ZP0ToiT9VUH3z85nfxWNUybVORy8vNd43qcq7Ev4NXaTiO7hn7W15Ub5qezzF8YWSJDjg5kmLYhGctp28RF3A4yJr2no7iKirSePx5FZhsSSHWecyMwKQvcwa6AQDCrYrxkkMAB3Nwq3vhiyuIQ3IhQO0hGP47s-fQmm9bAowj7yL_jKz-fw_b2aX1KeDMoI8fJOy7LGOVoePV-QgXx0s5eHNcmCbh2DZDQePEJgxE_ESOjv2md9rKZn6A">
<div class="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
<h4 class="font-headline-md text-headline-md mb-2">직육면체 솔리드 폼</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">견고한 메탈릭 구조</p>
</div>
</div>
<div class="relative overflow-hidden rounded-xl h-80 group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A close up of a glowing amber LED display screen in a dark room showing abstract digital noise patterns, shallow depth of field, high-tech industrial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD74B8Of0dp4jbNnREU6-XWjarW-MCS9lQtuiZtJ_tUdlmhw4nr1DSLuK_0ichoOWmVHzx5jCYKAj1fLA-tWc_zWq3Rs0VXJ_GV6vYiZxSBby1n5knuH_tN0_b3sgZrSiwjI4EvV5QgTvOf8VPVUJe1YWMxYfUlN80hVOAai9zElQ9la-mqtOuGYs5Pu1uufe8UQUIMPoeMmOteKiGhPRNQiPe6rvjH3MQJyMggcrTaoPNw-yk0aGJT0TkONmmRNODekX_eLi4fuFuc">
<div class="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
<h4 class="font-headline-md text-headline-md mb-2">4면 OLED 디스플레이</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">어느 각도에서나 보이는 빛</p>
</div>
</div>
<div class="relative overflow-hidden rounded-xl h-80 group">
<div class="w-full h-full bg-surface-container flex items-center justify-center pixel-fire text-6xl">🔥</div>
<div class="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
<h4 class="font-headline-md text-headline-md mb-2">픽셀 불꽃 시각화</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">레트로 테크놀로지 무드</p>
</div>
</div>
<div class="relative overflow-hidden rounded-xl h-80 group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Detail of a rugged knurled metal handle on a heavy piece of equipment, warm lighting from a campfire reflecting on the textured surface, cinematic depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjDN15LvAUkp3OmtUTVnSNg0h_8uedboblCqmIreZwe-IQUv8XqITIEqucjVTUaTxh6Y1fjei05r4Oq_VLc8n2J14DVo--ydqBTZJIdBjuHboNsp1hKnWLc5rS6G4pmMskWCCDU0Q7d2EKv8irnTcf6RVMTNHGU04snXAHUPB377jIYfgqO1Fgx0AP0jr43T-GedyVIf_jC80OipNnOo1KgTrw5ro-MeBh8o8dOrkyfkMRA1l-N7xXhUzhHH2UjB7b7W9tPyUQzfj6">
<div class="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
<h4 class="font-headline-md text-headline-md mb-2">랜턴 스타일 핸들</h4>
<p class="font-label-sm text-label-sm text-on-surface-variant">이동성과 감성의 결합</p>
</div>
</div>
</div>
</section>
<!-- User Experience Strategy (Scenarios) -->
<section class="py-32 px-margin-desktop overflow-hidden" id="story">
<div class="flex flex-col md:flex-row items-center gap-20">
<div class="w-full md:w-1/2 space-y-8 reveal active">
<h2 class="font-headline-lg text-headline-lg text-on-surface">사용자 경험 전략</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    단순히 소리를 듣는 도구가 아닙니다. 텐트 옆에 **Place(배치)**하고, 소리의 파동을 **Listen(청취)**하며, 타오르는 불빛을 **Watch(감상)**하는 세 가지 행위가 하나의 흐름으로 이어지는 경험을 제안합니다.
                </p>
<div class="space-y-4">
<div class="flex items-center gap-6 glass-panel p-6 rounded-xl metallic-border">
<div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">01</div>
<div>
<h5 class="font-headline-md text-headline-md text-sm">Place (배치)</h5>
<p class="font-body-md text-body-md text-on-surface-variant">캠프 사이트의 중심, 빛의 이정표</p>
</div>
</div>
<div class="flex items-center gap-6 glass-panel p-6 rounded-xl metallic-border">
<div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">02</div>
<div>
<h5 class="font-headline-md text-headline-md text-sm">Listen (청취)</h5>
<p class="font-body-md text-body-md text-on-surface-variant">공간을 가득 채우는 360도 무지향 사운드</p>
</div>
</div>
<div class="flex items-center gap-6 glass-panel p-6 rounded-xl metallic-border">
<div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">03</div>
<div>
<h5 class="font-headline-md text-headline-md text-sm">Watch (감상)</h5>
<p class="font-body-md text-body-md text-on-surface-variant">비트에 맞춰 일렁이는 디지털 불꽃</p>
</div>
</div>
</div>
</div>
<div class="w-full md:w-1/2 reveal active">
<div class="relative p-4 glass-panel rounded-[2rem] metallic-border shadow-2xl">
<img class="w-full rounded-[1.5rem] shadow-inner" data-alt="A cozy camping scene at night with a small glowing lantern on a rustic wooden table in front of a canvas tent, soft warm firelight illuminating the surroundings, forest background, cinematic photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnNWEI_h3QocGYt6cumsrlIjZdvrMAl6Vsi1224wWGCwfJyLaOdRyBuGQLkDX6ZCACabaqJsJROeWgSnvvAnFW9bl6F-LkecrzMWy4IbEdQxi__pBpW06S79FjrasnxotXcs-DcV4R0Ni2I79MNd9-TxtBAb09wzrM-mqsKW7wbxrXaQDD8okRGC-r4l9k7r7h6prn88b2z3M_fES_iXhtiRJYwumLuB2YdEmsXdPOqCGvoAVu0sV3V_sBDHPUyeqv3Zr_Tkc3OmKx">
<div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container rounded-full flex items-center justify-center animate-pulse">
<span class="material-symbols-outlined text-white text-4xl">play_arrow</span>
</div>
</div>
</div>
</div>
</section>
<!-- Sound Design Direction -->
<section class="py-32 px-margin-desktop bg-surface-container-lowest relative" id="specs">
<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-20 text-center reveal active">사운드 디자인 방향</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter reveal active">
<div class="space-y-4">
<div class="h-1 w-12 bg-primary"></div>
<h4 class="font-headline-md text-headline-md">공간감 넘치는 사운드</h4>
<p class="font-body-md text-body-md text-on-surface-variant">어느 곳에 두어도 선명한 사운드를 전달하는 360도 혼 시스템.</p>
</div>
<div class="space-y-4">
<div class="h-1 w-12 bg-primary"></div>
<h4 class="font-headline-md text-headline-md">따뜻한 베이스</h4>
<p class="font-body-md text-body-md text-on-surface-variant">장작이 타는 소리의 저역대를 강조한 튜닝으로 캠핑의 깊이를 더합니다.</p>
</div>
<div class="space-y-4">
<div class="h-1 w-12 bg-primary"></div>
<h4 class="font-headline-md text-headline-md">기능적 벤트 패턴</h4>
<p class="font-body-md text-body-md text-on-surface-variant">음향 투과율을 극대화한 동시에 산업적인 미감을 살린 미세 타공.</p>
</div>
<div class="space-y-4">
<div class="h-1 w-12 bg-primary"></div>
<h4 class="font-headline-md text-headline-md">빛과 소리의 레이어</h4>
<p class="font-body-md text-body-md text-on-surface-variant">소리의 크기에 따라 불꽃의 높낮이가 실시간으로 동기화됩니다.</p>
</div>
</div>
<div class="mt-20 glass-panel p-2 rounded-2xl reveal active">
<img class="w-full h-64 object-cover rounded-xl opacity-60" data-alt="Macro abstract shot of black metallic mesh with orange light shining from underneath, creating a rhythmic and warm pattern, high contrast, industrial premium texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcO8eJeJsbtaT_6snRypFmfjQ2bmk_UzX3Y3tZ086ZQ9RDBuJ2m4WKNYS49UX2EnEycvuDV50b4M2wl6XncEhpBiAP3ej58f9owAW71UM0zK1z_1EaPIzt65JrZrGu6XJAHKKryL6DtzxBtcapGEaWAHJZDSGFz0WcnLkVRfztDCFNktaKImtJowvvN3opWZZmzzAVk4Qxj_z3hLIbPYzWr7zDgOZPcnVKUwIKh3qgTYhBdMSDk3FG0xnv8Nho26FI7QLVdJpnr0zJ">
</div>
</section>
<!-- CMF Strategy (Bento Grid) -->
<section class="py-32 px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-20 text-center reveal active">CMF 전략</h2>
<div class="grid grid-cols-12 gap-6 reveal active">
<div class="col-span-12 md:col-span-4 glass-panel p-10 rounded-3xl flex flex-col justify-between metallic-border">
<div>
<h4 class="font-headline-md text-headline-md mb-4 text-primary">바디 소재</h4>
<p class="font-body-md text-body-md text-on-surface-variant">브러시드 다크 알루미늄으로 구현한 묵직하고 견고한 차가움.</p>
</div>
<div class="w-full h-12 bg-gradient-to-r from-[#1A1A1A] to-[#333333] rounded-lg mt-8"></div>
</div>
<div class="col-span-12 md:col-span-8 glass-panel p-10 rounded-3xl metallic-border flex flex-col md:flex-row gap-10">
<div class="flex-1">
<h4 class="font-headline-md text-headline-md mb-4 text-primary">OLED 표면</h4>
<p class="font-body-md text-body-md text-on-surface-variant">고투과율 스모키 글래스를 적용하여 전원이 꺼졌을 때는 블랙 미러처럼 보입니다.</p>
</div>
<div class="flex-1 rounded-xl overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Reflective dark glass surface showing deep reflections of amber light sparks, smooth and glossy finish, dark moody atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwZ8eVj6bl60zdFxtJV8aCYO7X0_kBHmRgWlHVWqsVj1nni-8vNAWCQnVB2vryRqUxas1unFtwRyfJJmnN5gjkGqiovO00d7gRVrpp9jLy-J54L4NxPgFhujoq5NSnNwxmAkBS4O1d5wASr37UC_IoqdtCllrVz0VOOD9eQICAtliGetD2QC5eNKeCL0Rcu3AhA2XWviaFwTbcjAHOhTp5FtcvQMjpZEBCas8tYjs0d6xzkwNUfoxAYuvRPHdYj1kg6MkjmTAtdZB5DaE">
</div>
</div>
<div class="col-span-12 md:col-span-6 glass-panel p-10 rounded-3xl metallic-border">
<h4 class="font-headline-md text-headline-md mb-4 text-primary">액센트 컬러 &amp; 핸들</h4>
<p class="font-body-md text-body-md text-on-surface-variant">불꽃의 핵심인 오렌지 컬러를 컨트롤 노브와 핸들 마감에 포인트로 사용했습니다.</p>
<div class="flex gap-4 mt-8">
<div class="w-12 h-12 bg-primary-container rounded-full ring-4 ring-primary/20"></div>
<div class="w-12 h-12 bg-[#2A2A2A] rounded-full border border-outline"></div>
<div class="w-12 h-12 bg-[#131313] rounded-full border border-primary/40"></div>
</div>
</div>
<div class="col-span-12 md:col-span-6 glass-panel p-10 rounded-3xl flex flex-col justify-center items-center gap-6 metallic-border">
<span class="material-symbols-outlined text-primary text-6xl" style="font-variation-settings: 'wght' 200;">settings_input_component</span>
<p class="font-label-sm text-label-sm text-center uppercase tracking-[0.2em]">컨트롤 파츠: 매트 스틸 널링 공법</p>
</div>
</div>
</section>
<!-- Product Positioning -->
<section class="py-32 px-margin-desktop bg-surface-dim">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-20 text-center reveal active">제품 포지셔닝</h2>
<div class="max-w-5xl mx-auto reveal active">
<div class="grid grid-cols-2 gap-12 text-center">
<div class="space-y-12">
<h4 class="font-label-sm text-label-sm text-on-surface-variant opacity-60">CONVENTIONAL SPEAKER</h4>
<div class="space-y-6 opacity-40 grayscale">
<div class="p-8 border border-white/10 rounded-xl">단순한 기능성</div>
<div class="p-8 border border-white/10 rounded-xl">일관된 공업 디자인</div>
<div class="p-8 border border-white/10 rounded-xl">청각 중심 경험</div>
</div>
</div>
<div class="space-y-12 relative">
<div class="absolute -inset-4 bg-primary/5 blur-2xl rounded-full"></div>
<h4 class="font-label-sm text-label-sm text-primary">FIREWAVE SPEAKER</h4>
<div class="space-y-6 relative z-10">
<div class="p-8 glass-panel border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.1)]">감성적 인터랙션</div>
<div class="p-8 glass-panel border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.1)]">시네마틱 오브제 디자인</div>
<div class="p-8 glass-panel border border-primary/30 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.1)]">공감각적 캠핑 경험</div>
</div>
</div>
</div>
</div>
</section>
<!-- Expected Effects (Grid) -->
<section class="py-32 px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-20 text-center reveal active">기대 효과</h2>
<div class="grid grid-cols-1 md:grid-cols-5 gap-4 reveal active">
<div class="p-8 glass-panel rounded-xl metallic-border flex flex-col justify-between h-64 hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary">favorite</span>
<p class="font-headline-md text-headline-md text-base">감성적 경험 극대화</p>
</div>
<div class="p-8 glass-panel rounded-xl metallic-border flex flex-col justify-between h-64 hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary">touch_app</span>
<p class="font-headline-md text-headline-md text-base">직관적 사용성 설계</p>
</div>
<div class="p-8 glass-panel rounded-xl metallic-border flex flex-col justify-between h-64 hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary">security</span>
<p class="font-headline-md text-headline-md text-base">화재 걱정 없는 안전한 불멍</p>
</div>
<div class="p-8 glass-panel rounded-xl metallic-border flex flex-col justify-between h-64 hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary">surround_sound</span>
<p class="font-headline-md text-headline-md text-base">몰입형 공간 음향</p>
</div>
<div class="p-8 glass-panel rounded-xl metallic-border flex flex-col justify-between h-64 hover:border-primary/50 transition-colors">
<span class="material-symbols-outlined text-primary">diamond</span>
<p class="font-headline-md text-headline-md text-base">압도적인 디자인 차별화</p>
</div>
</div>
</section>
<!-- Final Closing -->
<section class="py-60 px-margin-desktop text-center relative overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full"></div>
</div>
<div class="relative z-10 space-y-10 reveal active">
<h2 class="font-headline-xl text-headline-xl text-on-surface">소리, 불꽃이 되다.</h2>
<p class="font-headline-md text-headline-md text-on-surface-variant">음악을 듣고, 보고, 느끼는 새로운 캠핑 스피커</p>
<button class="bg-primary-container text-on-primary-container px-16 py-6 rounded-2xl font-headline-md text-headline-md font-black hover-halo transition-all tracking-wider">
                컨셉 경험하기
            </button>
</div>
<div class="mt-32 opacity-20 pixel-fire text-8xl flex justify-center gap-10">
<span class="">🔥</span><span class="">🔥</span><span class="">🔥</span>
</div>
</section>
<!-- Footer -->
<footer class="w-full relative flex flex-col items-center gap-8 py-20 px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/30">
<div class="font-headline-md text-headline-md font-black text-primary">FIREWAVE</div>
<div class="flex gap-12">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">이용약관</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">개인정보처리방침</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">고객지원</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">문의하기</a>
</div>
<div class="font-label-sm text-label-sm text-on-surface-variant/60">
            © 2024 FIREWAVE DIGITAL CAMPFIRE. ALL RIGHTS RESERVED.
        </div>
</footer>
<script>
        // Reveal animation on scroll
        const reveals = document.querySelectorAll('.reveal');
        const revealHandler = () => {
            const windowHeight = window.innerHeight;
            reveals.forEach(reveal => {
                const revealTop = reveal.getBoundingClientRect().top;
                if (revealTop < windowHeight - 100) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealHandler);
        window.addEventListener('load', revealHandler);

        // Micro-interactions for buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
            btn.addEventListener('mouseup', () => btn.style.transform = '');
            btn.addEventListener('mouseleave', () => btn.style.transform = '');
        });
    </script>


</body></html>
