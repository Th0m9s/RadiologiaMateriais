// Zonas do esquema do dente: descrição e coordenadas da área destacada.
const zones = {
  rest: ["Coroa (cavidade restaurada)", [130, 92, 38, 28, 0]],
  oclusal: ["Superfície oclusal", [130, 56, 46, 12, 0]],
  coroa: ["Coroa dentária total", [130, 100, 66, 58, 0]],
  fund: ["Fundo da cavidade, próximo à polpa", [130, 136, 28, 15, 0]],
  pino: ["Terço cervical do canal radicular", [130, 190, 16, 42, 0]],
  canal: ["Canal radicular", [130, 225, 16, 78, 0]],
  apice: ["Extremidade da raiz (ápice)", [130, 302, 24, 18, 0]],
  impl: ["Implante no osso alveolar", [300, 258, 26, 60, 0]],
  pilar: ["Pilar entre implante e prótese", [300, 188, 22, 24, 0]],
  brk: ["Superfície da coroa", [130, 100, 58, 30, 0]],
  cerv: ["Região cervical dos dentes", [130, 150, 76, 16, 0]],
  reb: ["Rebordo e dentes de suporte", [215, 168, 86, 26, 0]],
};

const LEVEL_LABELS = ["", "Muito baixa", "Baixa", "Moderada", "Alta", "Muito alta"];
const CATEGORIES = [
  "Restauradores",
  "Forramentos e bases",
  "Endodontia",
  "Próteses",
  "Implantes",
  "Ortodontia",
];

// Dados do catálogo: radiopacidade mínima/máxima, zona e descrição.
const materials = [
  {
    name: "Amálgama",
    category: CATEGORIES[0],
    min: 5,
    max: 5,
    zone: "rest",
    description: "Intensamente radiopaco, homogêneo e com alto contraste em relação ao dente.",
  },
  {
    name: "Resina composta",
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "rest",
    description: "Radiopacidade variável; geralmente próxima ou superior à dentina e inferior à dos metais.",
  },
  {
    name: "Selante de fóssulas e fissuras",
    category: CATEGORIES[0],
    min: 1,
    max: 3,
    zone: "oclusal",
    description: "Fina imagem radiopaca na superfície oclusal; alguns produtos são pouco visíveis.",
  },
  {
    name: "Cimento de ionômero de vidro convencional",
    category: CATEGORIES[0],
    min: 2,
    max: 3,
    zone: "rest",
    description: "Radiopacidade baixa a moderada, podendo se aproximar da dentina ou do esmalte.",
  },
  {
    name: "Cimento de ionômero de vidro modificado por resina",
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "rest",
    description: "Radiopacidade variável conforme a formulação; pode se assemelhar à resina composta.",
  },
  {
    name: "Restauração metálica fundida",
    category: CATEGORIES[0],
    min: 5,
    max: 5,
    zone: "rest",
    description: "Muito radiopaca, homogênea e com limites bem definidos.",
  },
  {
    name: "Hidróxido de cálcio (forramento)",
    category: CATEGORIES[1],
    min: 2,
    max: 4,
    zone: "fund",
    description: "Camada fina de radiopacidade variável, geralmente localizada próxima à polpa.",
  },
  {
    name: "Cimento de fosfato de zinco",
    category: CATEGORIES[1],
    min: 3,
    max: 4,
    zone: "fund",
    description: "Geralmente radiopaco, embora a visualização dependa da espessura da camada.",
  },
  {
    name: "Óxido de zinco e eugenol ou IRM",
    category: CATEGORIES[1],
    min: 3,
    max: 4,
    zone: "fund",
    description: "Radiopaco, com intensidade dependente da composição e da espessura.",
  },
  {
    name: "Guta-percha",
    category: CATEGORIES[2],
    min: 4,
    max: 4,
    zone: "canal",
    description: "Material radiopaco que acompanha o canal, com aspecto afilado ou de massa compactada.",
  },
  {
    name: "Cimento endodôntico",
    category: CATEGORIES[2],
    min: 3,
    max: 4,
    zone: "canal",
    description: "Fina camada radiopaca ao redor do material obturador, muitas vezes sem limite individualizável.",
  },
  {
    name: "Cone único com sealer biocerâmico",
    category: CATEGORIES[2],
    min: 4,
    max: 5,
    zone: "canal",
    description: "Cone central radiopaco associado a cimento radiopaco ao seu redor.",
  },
  {
    name: "Cone de prata",
    category: CATEGORIES[2],
    min: 5,
    max: 5,
    zone: "canal",
    description: "Linha metálica fina, lisa, afilada e intensamente radiopaca no interior do canal.",
  },
  {
    name: "Hidróxido de cálcio intracanal",
    category: CATEGORIES[2],
    min: 1,
    max: 3,
    zone: "canal",
    description: "Preenchimento temporário de radiopacidade variável, por vezes irregular ou pouco contrastante.",
  },
  {
    name: "Material retrobturador",
    category: CATEGORIES[2],
    min: 3,
    max: 5,
    zone: "apice",
    description: "Pequena massa radiopaca localizada na extremidade de uma raiz.",
  },
  {
    name: "Lima endodôntica",
    category: CATEGORIES[2],
    min: 5,
    max: 5,
    zone: "canal",
    description: "Instrumento metálico fino e intensamente radiopaco no interior do canal.",
  },
  {
    name: "Pino metálico intrarradicular",
    category: CATEGORIES[2],
    min: 5,
    max: 5,
    zone: "pino",
    description: "Intensamente radiopaco, com formato cilíndrico, cônico ou rosqueado.",
  },
  {
    name: "Coroa metalocerâmica",
    category: CATEGORIES[3],
    min: 4,
    max: 5,
    zone: "coroa",
    description: "Infraestrutura metálica muito radiopaca recoberta por cerâmica menos radiopaca.",
  },
  {
    name: "Coroa ou estrutura de zircônia",
    category: CATEGORIES[3],
    min: 4,
    max: 5,
    zone: "coroa",
    description: "Geralmente muito radiopaca e homogênea, podendo apresentar radiopacidade próxima à dos metais.",
  },
  {
    name: "Coroa provisória de resina acrílica",
    category: CATEGORIES[3],
    min: 1,
    max: 1,
    zone: "coroa",
    description: "Baixa radiopacidade, podendo ser pouco perceptível ou quase invisível.",
  },
  {
    name: "Coroa de aço inoxidável",
    category: CATEGORIES[3],
    min: 5,
    max: 5,
    zone: "coroa",
    description: "Casca metálica fina e muito radiopaca que recobre toda a coroa dentária.",
  },
  {
    name: "Prótese parcial removível metálica",
    category: CATEGORIES[3],
    min: 5,
    max: 5,
    zone: "reb",
    description: "Grampos, apoios, conectores e malha aparecem intensamente radiopacos.",
  },
  {
    name: "Prótese acrílica",
    category: CATEGORIES[3],
    min: 1,
    max: 2,
    zone: "reb",
    description: "A base apresenta baixa radiopacidade; dentes artificiais e componentes incorporados podem ser mais visíveis.",
  },
  {
    name: "Implante de titânio",
    category: CATEGORIES[4],
    min: 5,
    max: 5,
    zone: "impl",
    description: "Estrutura muito radiopaca, geralmente cilíndrica ou cônica, com roscas visíveis.",
  },
  {
    name: "Pilar protético",
    category: CATEGORIES[4],
    min: 4,
    max: 5,
    zone: "pilar",
    description: "Componente radiopaco localizado entre o implante e a restauração protética.",
  },
  {
    name: "Bandas, bráquetes e fios metálicos",
    category: CATEGORIES[5],
    min: 5,
    max: 5,
    zone: "brk",
    description: "Estruturas pequenas ou lineares, regulares e intensamente radiopacas.",
  },
  {
    name: "Contenção fixa",
    category: CATEGORIES[5],
    min: 5,
    max: 5,
    zone: "cerv",
    description: "Alça, barra ou fio metálico radiopaco relacionado a vários dentes.",
  },
];

// Comparações "pode ser confundido com": nome de material ou texto livre.
const confusions = {
  "Resina composta": ["Cimento de ionômero de vidro modificado por resina", "Dentina"],
  "Cimento de ionômero de vidro modificado por resina": ["Resina composta"],
  "Cimento de ionômero de vidro convencional": ["Dentina", "Esmalte"],
  "Coroa ou estrutura de zircônia": ["Estruturas metálicas"],
};

// Estado da página.
const getElement = (id) => document.getElementById(id);
let selectedCategory = "Todos";
let searchQuery = "";
let currentMaterialIndex = 0;
let visibleMaterials = [];

// Apresentação dos níveis de radiopacidade.
const grayTone = (level) => {
  const value = Math.round(40 + (level - 1) * 52);
  return `rgb(${value}, ${value + 4}, ${value + 8})`;
};

const averageLevel = (material) => (material.min + material.max) / 2;

const levelDescription = (material) =>
  "Radiopacidade: " +
  (material.min === material.max
    ? LEVEL_LABELS[material.min]
    : `${LEVEL_LABELS[material.min]} a ${LEVEL_LABELS[material.max].toLowerCase()}`);

const levelIndicators = (material) =>
  [1, 2, 3, 4, 5]
    .map((level) => {
      const active = level >= material.min && level <= material.max;
      return `<i class="${active ? "on" : ""}"></i>`;
    })
    .join("");

const materialThumbnail = (material) => {
  const [centerX, centerY, radiusX, radiusY] = zones[material.zone][1];
  const size = Math.max(radiusX, radiusY) + 58;
  const opacity = 0.1 + (averageLevel(material) - 1) * 0.2;

  return `
    <svg
      class="th"
      viewBox="${centerX - size} ${centerY - size * 0.55} ${size * 2} ${size * 1.1}"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <use href="#tg"></use>
      <ellipse
        cx="${centerX}"
        cy="${centerY}"
        rx="${radiusX}"
        ry="${radiusY}"
        fill="#fff"
        fill-opacity="${opacity}"
        filter="url(#bl2)"
      ></ellipse>
    </svg>
  `;
};

// Catálogo e filtros.
function buildCatalog() {
  const filterList = getElement("fl");
  filterList.innerHTML = "";

  ["Todos", ...CATEGORIES].forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = category === selectedCategory ? "on" : "";
    button.onclick = () => {
      selectedCategory = category;
      buildCatalog();
    };
    filterList.appendChild(button);
  });

  visibleMaterials = materials.filter((material) => {
    const matchesCategory =
      selectedCategory === "Todos" || material.category === selectedCategory;
    const matchesQuery = `${material.name} ${material.description}`
      .toLowerCase()
      .includes(searchQuery);

    return matchesCategory && matchesQuery;
  });

  getElement("gr").innerHTML = visibleMaterials
    .map(
      (material, index) => `
        <button class="card" data-index="${index}">
          ${materialThumbnail(material)}
          <span class="tag">${material.category}</span>
          <h3>${material.name}</h3>
          <div class="mt">${levelIndicators(material)}</div>
          <div class="lv">${levelDescription(material)}</div>
        </button>
      `,
    )
    .join("");

  getElement("no").style.display = visibleMaterials.length ? "none" : "block";

  document.querySelectorAll(".card").forEach((card) => {
    card.onclick = () => showMaterial(Number(card.dataset.index), visibleMaterials);
  });
}

getElement("q").oninput = (event) => {
  searchQuery = event.target.value.trim().toLowerCase();
  buildCatalog();

  if (searchQuery) {
    getElement("materiais").scrollIntoView();
  }
};

// Detalhes do material.
function showMaterial(index, materialList) {
  if (materialList) {
    visibleMaterials = materialList;
  }

  currentMaterialIndex = index;
  const material = visibleMaterials[index];
  const [zoneDescription, coordinates] = zones[material.zone];

  getElement("dt").textContent = material.category;
  getElement("dn").textContent = material.name;
  getElement("dm").innerHTML = levelIndicators(material);
  getElement("dv").textContent = levelDescription(material);
  getElement("dd").textContent = material.description;
  getElement("dw").textContent = `📍 Onde aparece: ${zoneDescription}`;
  renderGrayScale(material);
  renderConfusions(material);
  highlightZone(coordinates);

  if (!getElement("dl").open) {
    getElement("dl").showModal();
  }
}

function renderGrayScale(material) {
  const referenceTones = [
    ["Ar", 8],
    ["Osso", 70],
    ["Dentina", 125],
    ["Esmalte", 185],
  ];

  getElement("rf").innerHTML = `
    <div class="rt">
      ${referenceTones
        .map(
          ([name, value]) => `
            <div>
              <i style="background: rgb(${value}, ${value + 4}, ${value + 8})"></i>
              ${name}
            </div>
          `,
        )
        .join("")}
      <div class="mx">
        <i style="background: linear-gradient(90deg, ${grayTone(material.min)}, ${grayTone(material.max)})"></i>
        Material
      </div>
    </div>
    <div class="lv">Comparação ilustrativa de tons de cinza</div>
  `;
}

function renderConfusions(material) {
  const possibleConfusions = confusions[material.name];
  const confusionMarkup = possibleConfusions
    ? `<div>${possibleConfusions
        .map((name) => {
          const index = materials.findIndex((item) => item.name === name);
          return index >= 0
            ? `<button data-index="${index}">${name}</button>`
            : `<span>${name}</span>`;
        })
        .join("")}</div>`
    : "<em>Comparações ainda não cadastradas para este material.</em>";

  getElement("cf").innerHTML = `<b>Pode ser confundido com</b>${confusionMarkup}`;
  getElement("cf").querySelectorAll("button").forEach((button) => {
    button.onclick = () => showMaterial(Number(button.dataset.index), materials);
  });
}

function highlightZone([centerX, centerY, radiusX, radiusY, rotation]) {
  const padding = 7;
  const transform = `rotate(${rotation} ${centerX} ${centerY})`;

  getElement("hg").innerHTML = `
    <ellipse
      cx="${centerX}"
      cy="${centerY}"
      rx="${radiusX + padding}"
      ry="${radiusY + padding}"
      transform="${transform}"
      class="gl"
    ></ellipse>
    <ellipse
      cx="${centerX}"
      cy="${centerY}"
      rx="${radiusX + padding}"
      ry="${radiusY + padding}"
      transform="${transform}"
      class="ring"
      pathLength="1"
    ></ellipse>
  `;
}

window.oN = (name) => {
  const index = materials.findIndex((material) => material.name === name);
  showMaterial(index, materials);
};

getElement("cl").onclick = () => getElement("dl").close();
getElement("dl").onclick = (event) => {
  if (event.target === getElement("dl")) {
    getElement("dl").close();
  }
};

getElement("pv").onclick = () =>
  showMaterial(
    (currentMaterialIndex - 1 + visibleMaterials.length) % visibleMaterials.length,
  );
getElement("nx").onclick = () =>
  showMaterial((currentMaterialIndex + 1) % visibleMaterials.length);

// Escala de radiopacidade.
getElement("rk").innerHTML = [...materials]
  .sort(
    (first, second) =>
      averageLevel(first) - averageLevel(second) ||
      first.name.localeCompare(second.name),
  )
  .map(
    (material) => `
      <div class="rk" data-name="${material.name}">
        <span>${material.name}</span>
        <div class="bar">
          <b
            style="left: ${(material.min - 1) * 20}%; width: ${(material.max - material.min + 1) * 20}%"
          ></b>
        </div>
      </div>
    `,
  )
  .join("");

document.querySelectorAll(".rk").forEach((row) => {
  row.onclick = () => {
    const index = materials.findIndex((material) => material.name === row.dataset.name);
    showMaterial(index, materials);
  };
});

// Quiz.
let correctAnswers = 0;
let totalAnswers = 0;
let currentQuestionMaterial = null;
let questionNumber = 0;

function nextQuestion() {
  currentQuestionMaterial =
    materials[Math.floor(Math.random() * materials.length)];
  const options = [currentQuestionMaterial];

  while (options.length < 4) {
    const option = materials[Math.floor(Math.random() * materials.length)];
    if (!options.includes(option)) {
      options.push(option);
    }
  }

  options.sort(() => Math.random() - 0.5);
  questionNumber += 1;
  getElement("qn").textContent = questionNumber;
  getElement("qq").textContent = `“${currentQuestionMaterial.description}”`;
  getElement("qx").style.display = "none";
  getElement("qo").innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.name;
    button.onclick = () => {
      if (getElement("qx").style.display === "block") {
        return;
      }

      totalAnswers += 1;
      if (option === currentQuestionMaterial) {
        correctAnswers += 1;
        button.classList.add("ok");
      } else {
        button.classList.add("bad");
        [...getElement("qo").children]
          .find((answer) => answer.textContent === currentQuestionMaterial.name)
          .classList.add("ok");
      }

      getElement("qs").textContent = `${correctAnswers}/${totalAnswers}`;
      getElement("qx").style.display = "block";
    };
    getElement("qo").appendChild(button);
  });
}

getElement("qx").onclick = nextQuestion;

// Inicialização.
buildCatalog();
nextQuestion();
