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
  "Dentística",
  "Prótese dentária",
  "Endodontia",
  "Implantodontia",
  "Ortodontia",
];

// Dados do catálogo: radiopacidade mínima/máxima, zona e descrição.
const materials = [
  {
    name: "Amálgama",
    image: "assets/radiografias/amalgama.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 5,
    max: 5,
    zone: "rest",
    description:
      "Área de radiopacidade metálica, homogênea, com alto contraste em relação ao dente e de contornos regulares.",
  },
  {
    name: "Resina composta",
    image: "assets/radiografias/resina-composta.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "rest",
    description: "Radiopacidade variável; geralmente próxima ou superior à dentina e inferior à dos metais.",
  },
  {
    name: "Selante de fóssulas e fissuras",
    image: "assets/radiografias/selante-fossulas-fissuras.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 1,
    max: 3,
    zone: "oclusal",
    description:
      "Fina imagem radiopaca que acompanha o desenho das fissuras na superfície oclusal. A pequena espessura e a sobreposição do esmalte podem dificultar sua identificação; a ausência de imagem evidente não confirma a ausência do material.",
  },
  {
    name: "Cimento de ionômero de vidro convencional",
    image: "assets/radiografias/cimento-ionomero-vidro-convencional.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 2,
    max: 3,
    zone: "rest",
    description:
      "Radiopacidade bastante variável. Algumas formulações apresentam contraste inferior ao da dentina e podem dificultar a diferenciação entre material, base e lesão cariosa.",
  },
  {
    name: "Cimento de ionômero de vidro modificado por resina",
    image: "assets/radiografias/cimento-ionomero-vidro-modificado-resina.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "rest",
    description:
      "Radiopacidade variável conforme a formulação; pode se assemelhar à resina composta. Quando empregado como material forrador, pode aparecer como uma camada de contraste diferente sob a restauração.",
  },
  {
    name: "Coroa metalocerâmica",
    image: "assets/radiografias/coroa-metaloceramica.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 4,
    max: 5,
    zone: "coroa",
    description:
      "Infraestrutura de radiopacidade metálica que pode ocultar o remanescente dentário. A camada cerâmica é radiopaca, mas nem sempre distinguível, especialmente nas regiões de sobreposição.",
  },
  {
    name: "Hidróxido de cálcio (forramento)",
    image: "assets/radiografias/hidroxido-calcio-forramento.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 2,
    max: 4,
    zone: "fund",
    description:
      "Camada fina de radiopacidade variável, geralmente localizada próxima à polpa.",
  },
  {
    name: "Cimento resinoso",
    image: "assets/radiografias/cimento-resinoso.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "fund",
    description:
      "Pode aparecer como uma linha radiopaca entre a restauração indireta e o preparo. A visualização depende da espessura da camada e da ausência de sobreposição.",
  },
  {
    name: "Cimento de fosfato de zinco",
    image: "assets/radiografias/cimento-fosfato-zinco.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "fund",
    description:
      "Pode aparecer como uma linha radiopaca entre a restauração indireta e o preparo. A visualização depende da espessura da camada e da ausência de sobreposição.",
  },
  {
    name: "Cimento de policarboxilato de zinco",
    image: "assets/radiografias/cimento-policarboxilato-zinco.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 2,
    max: 4,
    zone: "fund",
    description:
      "Pode aparecer como uma linha radiopaca entre a restauração indireta e o preparo. A visualização depende da espessura da camada e da ausência de sobreposição.",
  },
  {
    name: "Óxido de zinco e eugenol",
    image: "assets/radiografias/oxido-zinco-eugenol.jpg",
    imageReady: false,
    category: CATEGORIES[0],
    min: 3,
    max: 4,
    zone: "fund",
    description:
      "A forma acompanha seu uso como restauração temporária ou forramento. É radiopaco, com intensidade dependente da composição e da espessura.",
  },
  {
    name: "Restauração metálica fundida",
    image: "assets/radiografias/restauracao-metalica-fundida.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 5,
    max: 5,
    zone: "rest",
    description:
      "A forma pode ajudar a reconhecer uma inlay, onlay ou coroa. É radiopaca, homogênea e com limites bem definidos. A intensa radiopacidade limita a avaliação das estruturas situadas sob o metal.",
  },
  {
    name: "Coroa ou estrutura de zircônia",
    image: "assets/radiografias/coroa-estrutura-zirconia.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 4,
    max: 5,
    zone: "coroa",
    description:
      "Geralmente muito radiopaca e homogênea, podendo apresentar radiopacidade próxima à dos metais. A elevada radiopacidade pode dificultar a distinção em relação a estruturas metálicas. A radiografia isolada geralmente não permite confirmar a composição.",
  },
  {
    name: "Coroa de aço inoxidável",
    image: "assets/radiografias/coroa-aco-inoxidavel.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 5,
    max: 5,
    zone: "coroa",
    description:
      "Contorno metálico fino e muito radiopaco que recobre toda a coroa dentária. O contorno periférico tende a ser bastante evidente; a porção central pode mostrar menor radiopacidade aparente, conforme a espessura atravessada pelo feixe.",
  },
  {
    name: "Coroa provisória de resina acrílica",
    image: "assets/radiografias/coroa-provisoria-resina-acrilica.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 1,
    max: 1,
    zone: "coroa",
    description: "Baixa radiopacidade, podendo ser pouco perceptível ou quase invisível.",
  },
  {
    name: "Pino metálico intrarradicular",
    image: "assets/radiografias/pino-metalico-intrarradicular.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 5,
    max: 5,
    zone: "pino",
    description:
      "Faixa de radiopacidade metálica, com formato cilíndrico, cônico ou rosqueado. Pode apresentar continuidade com um núcleo coronário. Forma, comprimento e relação com a obturação apical ajudam a caracterizar o conjunto.",
  },
  {
    name: "Pino de fibra de vidro ou quartzo",
    image: "assets/radiografias/pino-fibra-vidro-quartzo.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 2,
    max: 4,
    zone: "pino",
    description:
      "Estrutura intrarradicular de formato geralmente cônico ou cilíndrico e radiopacidade variável conforme a formulação. Pode apresentar menor contraste que pinos metálicos.",
  },
  {
    name: "Prótese parcial removível metálica",
    image: "assets/radiografias/protese-parcial-removivel-metalica.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 5,
    max: 5,
    zone: "reb",
    description:
      "Grampos, apoios, conectores e malha aparecem intensamente radiopacos. A base acrílica pode ser pouco perceptível.",
  },
  {
    name: "Prótese acrílica",
    image: "assets/radiografias/protese-acrilica.jpg",
    imageReady: false,
    category: CATEGORIES[1],
    min: 1,
    max: 2,
    zone: "reb",
    description:
      "A base apresenta baixa radiopacidade, nem sempre identificável; dentes artificiais e grampos metálicos incorporados podem ser mais visíveis.",
  },
  {
    name: "Guta-percha",
    image: "assets/radiografias/guta-percha.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 4,
    max: 4,
    zone: "canal",
    description:
      "Material radiopaco que acompanha o canal, com aspecto afilado ou de massa compactada. A aparência varia conforme a quantidade de material e a técnica de obturação.",
  },
  {
    name: "Cimento endodôntico",
    image: "assets/radiografias/cimento-endodontico.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 3,
    max: 4,
    zone: "canal",
    description:
      "Pode aparecer como uma fina camada radiopaca ao redor do material obturador, muitas vezes sem limite individualizável. Também pode formar acúmulos ou extravasamentos; sua imagem frequentemente se sobrepõe à da guta-percha.",
  },
  {
    name: "Obturação com cone único e sealer biocerâmico",
    image: "assets/radiografias/obturacao-cone-unico-sealer-bioceramico.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 4,
    max: 5,
    zone: "canal",
    description: "Cone central radiopaco associado a cimento radiopaco ao seu redor.",
  },
  {
    name: "Cone de prata",
    image: "assets/radiografias/cone-prata.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 5,
    max: 5,
    zone: "canal",
    description:
      "Linha de radiopacidade metálica fina, lisa e afilada, com contornos regulares no interior do canal.",
  },
  {
    name: "Hidróxido de cálcio intracanal",
    image: "assets/radiografias/hidroxido-calcio-intracanal.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 1,
    max: 3,
    zone: "canal",
    description:
      "Preenchimento temporário de radiopacidade variável, por vezes irregular ou pouco contrastante. A visibilidade depende do veículo e dos radiopacificadores incorporados; a radiografia não permite confirmar, isoladamente, sua composição.",
  },
  {
    name: "Material retro-obturador",
    image: "assets/radiografias/material-retro-obturador.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 3,
    max: 5,
    zone: "apice",
    description: "Pequena massa radiopaca localizada na extremidade de uma raiz.",
  },
  {
    name: "Lima endodôntica",
    image: "assets/radiografias/lima-endodontica.jpg",
    imageReady: false,
    category: CATEGORIES[2],
    min: 5,
    max: 5,
    zone: "canal",
    description:
      "Instrumento metálico fino e intensamente radiopaco no interior do canal. Pode estar presente durante a odontometria ou corresponder a um fragmento separado. A interpretação depende do contexto e da continuidade do instrumento.",
  },
  {
    name: "Implante de titânio",
    image: "assets/radiografias/implante-titanio.jpg",
    imageReady: false,
    category: CATEGORIES[3],
    min: 5,
    max: 5,
    zone: "impl",
    description:
      "Estrutura muito radiopaca, geralmente cilíndrica ou cônica, com roscas visíveis. Podem ser reconhecidos o corpo, as roscas, a plataforma e componentes de conexão. A imagem isolada não confirma a osseointegração.",
  },
  {
    name: "Pilar protético",
    image: "assets/radiografias/pilar-protetico.jpg",
    imageReady: false,
    category: CATEGORIES[3],
    min: 4,
    max: 5,
    zone: "pilar",
    description: "Componente radiopaco localizado entre o implante e a restauração protética.",
  },
  {
    name: "Bandas ortodônticas",
    image: "assets/radiografias/bandas-ortodonticas.jpg",
    imageReady: false,
    category: CATEGORIES[4],
    min: 5,
    max: 5,
    zone: "brk",
    description: "Anéis metálicos que contornam coroas.",
  },
  {
    name: "Bráquetes ortodônticos",
    image: "assets/radiografias/braquetes-ortodonticos.jpg",
    imageReady: false,
    category: CATEGORIES[4],
    min: 5,
    max: 5,
    zone: "brk",
    description: "Pequenas estruturas de radiopacidade metálica sobrepostas aos dentes.",
  },
  {
    name: "Fio metálico ortodôntico",
    image: "assets/radiografias/fio-metalico-ortodontico.jpg",
    imageReady: false,
    category: CATEGORIES[4],
    min: 5,
    max: 5,
    zone: "brk",
    description: "Fios que formam imagens radiopacas lineares.",
  },
  {
    name: "Contenção fixa",
    image: "assets/radiografias/contencao-fixa.jpg",
    imageReady: false,
    category: CATEGORIES[4],
    min: 5,
    max: 5,
    zone: "cerv",
    description:
      "Fio metálico linear ou ondulado na região anterior. A resina de fixação pode apresentar contraste diferente e nem sempre ser distinguível.",
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
let detailImageRequest = 0;

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
      class="th th-fallback"
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
          <span class="th-wrap">
            ${materialThumbnail(material)}
            ${
              material.imageReady
                ? `<img class="th-photo" src="${material.image}" alt="Radiografia de ${material.name}">`
                : ""
            }
            <span class="photo-pending-label">Foto pendente</span>
          </span>
          <span class="tag">${material.category}</span>
          <h3>${material.name}</h3>
          <div class="mt">${levelIndicators(material)}</div>
          <div class="lv">${levelDescription(material)}</div>
        </button>
      `,
    )
    .join("");

  getElement("no").style.display = visibleMaterials.length ? "none" : "block";

  document.querySelectorAll(".th-photo").forEach((image) => {
    const showPhoto = () => image.closest(".th-wrap").classList.add("has-photo");
    image.onload = showPhoto;
    image.onerror = () => image.remove();
    if (image.complete && image.naturalWidth > 0) {
      showPhoto();
    }
  });

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

  const photo = getElement("detail-photo");
  const illustration = getElement("sv");
  const pendingLabel = getElement("photo-pending");
  const request = ++detailImageRequest;

  photo.hidden = true;
  illustration.hidden = false;
  pendingLabel.hidden = false;
  photo.onload = null;
  photo.onerror = null;
  photo.removeAttribute("src");
  photo.alt = `Radiografia de ${material.name}`;
  if (material.imageReady) {
    photo.onload = () => {
      if (request !== detailImageRequest) {
        return;
      }

      photo.hidden = false;
      illustration.hidden = true;
      pendingLabel.hidden = true;
    };
    photo.onerror = () => {
      if (request === detailImageRequest) {
        photo.hidden = true;
        photo.removeAttribute("src");
      }
    };
    photo.src = material.image;
    if (photo.complete && photo.naturalWidth > 0) {
      photo.onload();
    }
  }

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
