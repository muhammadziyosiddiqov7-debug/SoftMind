const aiData = [
    ["ChatGPT", 98],
    ["Gemini", 94],
    ["Claude", 92],
    ["Copilot", 93],
    ["Perplexity", 90],
    ["Midjourney", 95],
    ["DALL·E", 91],
    ["Stable Diffusion", 89],
    ["Runway", 88],
    ["Pika", 85],

    ["Leonardo AI", 84],
    ["Firefly", 87],
    ["Krea AI", 78],
    ["DeepSeek", 83],
    ["Replit AI", 86],

    ["Notion AI", 88],
    ["Jasper", 82],
    ["Writesonic", 80],
    ["Copy.ai", 79],
    ["Rytr", 76],

    ["Synthesia", 81],
    ["ElevenLabs", 90],
    ["Murf AI", 77],
    ["Descript", 85],
    ["Lovo", 74],

    ["AutoGPT", 83],
    ["BabyAGI", 72],
    ["LangChain", 86],
    ["HuggingFace", 91],
    ["OpenRouter", 75],

    ["DeepL", 92],
    ["Remove.bg", 88],
    ["Otter.ai", 84],
    ["Speechify", 79],
    ["Tome AI", 73],

    ["Kaiber", 70],
    ["Voicemod AI", 78],
    ["Character AI", 89],
    ["Reface", 76],
    ["Cleanup.pictures", 74]
];

const ctx = document.getElementById("aiChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: aiData.map(ai => ai[0]),
        datasets: [{
            label: "Mashhurlik (%)",
            data: aiData.map(ai => ai[1]),
            borderRadius: 12,
            backgroundColor: aiData.map(v =>
                v[1] > 90 ? "#6366F1" :
                    v[1] > 80 ? "#8B5CF6" :
                        "#CBD5E1"
            )
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

let bt = document.getElementById(`badge`)
let chiq = document.getElementById(`ism`)
let ciq = document.getElementById(`rasm`)
let iq = document.getElementById(`nomer`)



const grid = document.getElementById("aiGrid");

AIs.forEach(ai => {
    const card = document.createElement("div");
    card.className = "ai-card";

    card.innerHTML = `
    <img src="${ai.img}">
    <h3>${ai.name}</h3>
    <p>${ai.type}</p>
    <span>${ai.type}</span>
  `;

    grid.appendChild(card);
});


const searchInput = document.getElementById("searchInput");
const emptyText = document.getElementById("emptyText");

function render(list) {
    grid.innerHTML = "";

    if (list.length === 0) {
        emptyText.style.display = "block";
        return;
    }

    emptyText.style.display = "none";

    list.forEach(ai => {
        const card = document.createElement("div");
        card.className = "ai-card";

        card.innerHTML = `
      <img src="${ai.img}">
      <h3>${ai.name}</h3>
      <p>${ai.type}</p>
      <span>${ai.type}</span>
    `;

        grid.appendChild(card);
    });
}

// 🔍 SEARCH
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = AIs.filter(ai =>
        ai.name.toLowerCase().includes(value)
    );

    render(filtered);
});

// first load
render(AIs);



const typeSelect = document.getElementById("typeSelect");

function filterAIs() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedType = typeSelect.value;

  const result = AIs.filter(ai => {
    const matchName = ai.name.toLowerCase().includes(searchValue);
    const matchType =
      selectedType === "all" || ai.type === selectedType;

    return matchName && matchType;
  });

  render(result);
}

function render(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    emptyText.style.display = "block";
    return;
  }

  emptyText.style.display = "none";

  list.forEach(ai => {
    const card = document.createElement("div");
    card.className = "ai-card";

    card.innerHTML = `
      <img src="${ai.img}">
      <h3>${ai.name}</h3>
      <p>${ai.type}</p>
      <span>${ai.type}</span>
    `;

    grid.appendChild(card);
  });
}

// EVENTS
searchInput.addEventListener("input", filterAIs);
typeSelect.addEventListener("change", filterAIs);

// first load
render(AIs);
function filterAIs() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedType = typeSelect.value;

  const filtered = AIs.filter(ai => {
    const nameOk = ai.name.toLowerCase().includes(searchValue);
    const typeOk =
      selectedType === "all" || ai.type === selectedType;

    return nameOk && typeOk;
  });

  render(filtered);
}
