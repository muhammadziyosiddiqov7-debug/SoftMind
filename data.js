const AIs = [
    // ===== CHAT AI =====
    {
        name: "ChatGPT",
        type: "chat",
        img: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Gemini",
        type: "chat",
        img: "https://plus.unsplash.com/premium_photo-1701059900699-edf0a8c7386e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VtaW5pfGVufDB8fDB8fHww"
    },
    {
        name: "Claude",
        type: "chat",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRerUvJh-2GP-zMmBFfCmnzZ6mlwjwL9Spg&s"
    },
    {
        name: "Perplexity",
        type: "chat",
        img: "https://plus.unsplash.com/premium_photo-1680302397750-ef86e280a172?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVycGxleGl0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Character AI",
        type: "chat",
        img: "https://images.unsplash.com/photo-1768323102304-a06c1cdec8b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYXJhY3RlciUyMGFpfGVufDB8fDB8fHww"
    },

    // ===== IMAGE AI =====
    {
        name: "Midjourney",
        type: "image",
        img: "https://images.unsplash.com/photo-1675557570482-df9926f61d86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlkam91cm5leXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "DALL·E",
        type: "image",
        img: "https://media.istockphoto.com/id/2185337504/photo/automation-of-business-or-robotic-process-rpa-technology-transfer-of-data-between-application.webp?a=1&b=1&s=612x612&w=0&k=20&c=S9uGVbuGr8ylMaqFCghC_sQdlk6QlvGYUkWZRkMxa-Q="
    },
    {
        name: "Stable Diffusion",
        type: "image",
        img: "https://plus.unsplash.com/premium_photo-1727243128559-b3be819003d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RhYmxlJTIwRGlmZnVzaW9ufGVufDB8fDB8fHww"
    },
    {
        name: "Leonardo AI",
        type: "image",
        img: "https://media.istockphoto.com/id/1914036965/photo/img_1330-jpg.webp?a=1&b=1&s=612x612&w=0&k=20&c=6fG4OWHPHxfeE-T9WIvGYN3xEpTsfAoYrHe5C-YEF8Y="
    },
    {
        name: "Remove.bg",
        type: "image",
        img: "https://plus.unsplash.com/premium_photo-1669530841457-a10eb484ecb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVtb3ZlLmJnfGVufDB8fDB8fHww"
    },

    // ===== CODE AI =====
    {
        name: "GitHub Copilot",
        type: "code",
        img: "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2l0SHVifGVufDB8fDB8fHww"
    },
    {
        name: "Codeium",
        type: "code",
        img: "https://media.istockphoto.com/id/2212505807/photo/ai-code-numbers-white-text-digital-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=L2hUJkdXtXej-cT89Vuz6bPMErhMmrjaMRN6tcmf2b8="
    },
    {
        name: "Cursor",
        type: "code",
        img: "https://images.unsplash.com/photo-1767817099805-d79e31fb968c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1cnNvcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Tabnine",
        type: "code",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Replit AI",
        type: "code",
        img: "https://media.istockphoto.com/id/1485546309/photo/abstract-image-of-businessman-walking-in-vr-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=9dq1RVE2fsYk2MRp98kP-CKGBgi3ylmdsruUJ9hSWQA="
    },

    // ===== VIDEO AI =====
    {
        name: "Runway",
        type: "video",
        img: "https://media.istockphoto.com/id/2219678630/photo/ai-content-creation-tools-man-uses-laptop-with-ai-assistant-for-graphic-design-translation.webp?a=1&b=1&s=612x612&w=0&k=20&c=3TSTlUgTPqBZSpOqsKuLKuUQxcCay2s99KVNZUsrUVg="
    },
    {
        name: "Pika",
        type: "video",
        img: "https://fahimai.com/wp-content/uploads/2024/08/Fahim-AI-29.png"
    },
    {
        name: "Synthesia",
        type: "video",
        img: "Synthesia"
    },
    {
        name: "HeyGen",
        type: "video",
        img: "https://cdn.sanity.io/images/pdhqcmb1/production/8e17731cd3a7882981466190057e95b6c4956ee7-3840x2560.jpg?fit=max&auto=format"
    },
    {
        name: "Luma AI",
        type: "video",
        img: "https://media.istockphoto.com/id/2220305864/photo/ai-artificial-intelligence-digital-concept-machine-learning-concepts-llm-large-language-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=8_Si-wYvon63jgz176mzm7hJOq2Jcp0HvGxZFB8wia4="
    },

    // ===== VOICE / AUDIO AI =====
    {
        name: "ElevenLabs",
        type: "audio",
        img: ""
    },
    {
        name: "Murf AI",
        type: "audio",
        img: ""
    },
    {
        name: "PlayHT",
        type: "audio",
        img: ""
    },



    // ===== TEXT / PRODUCTIVITY =====
    {
        name: "Notion AI",
        type: "other",
        img: ""
    },
    {
        name: "Grammarly",
        type: "other",
        img: ""
    },
    {
        name: "QuillBot",
        type: "other",
        img: ""
    },
    {
        name: "Wordtune",
        type: "other",
        img: ""
    },
    {
        name: "DeepL",
        type: "other",
        img: ""
    },

    // ===== AGENT / FRAMEWORK =====
    {
        name: "AutoGPT",
        type: "other",
        img: ""
    },
    {
        name: "BabyAGI",
        type: "other",
        img: ""
    },
    {
        name: "CrewAI",
        type: "other",
        img: ""
    },
    {
        name: "LangChain",
        type: "other",
        img: ""
    },

];
