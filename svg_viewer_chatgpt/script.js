const svg1Layers = [
  'Layer 1',
  'Layer 2',
  'Layer 3'
];

const svg2Layers = [
  'Layer A',
  'Layer B',
  'Layer C'
];

const svg1 = `
  <svg width="100%" height="100%" viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" fill="#00ff00" stroke="#000000" stroke-width="1" />
    <circle cx="50" cy="50" r="20" fill="#ff0000" stroke="#000000" stroke-width="1" />
    <polygon points="20,70 50,30 80,70" fill="#0000ff" stroke="#000000" stroke-width="1" />
  </svg>
`;

const svg2 = `
  <svg width="100%" height="100%" viewBox="0 0 100 100">
    <path d="M 10 10 L 90 10 L 50 90 Z" fill="#00ff00" stroke="#000000" stroke-width="1" />
    <rect x="20" y="20" width="60" height="60" fill="#ff0000" stroke="#000000" stroke-width="1" />
    <line x1="10" y1="90" x2="90" y2="90" stroke="#0000ff" stroke-width="1" />
  </svg>
`;

const svgContainer = document.querySelector('#svg-container');
const svg1Btn = document.querySelector('#svg1-btn');
const svg2Btn = document.querySelector('#svg2-btn');
const layerMenu = document.querySelector('#layer-menu');
const layerList = document.querySelector('#layer-list');

svg1Btn.addEventListener('click', () => {
  svgContainer.innerHTML = svg1;
  populateLayers(svg1Layers);
  layerMenu.style.display = 'block';
});

svg2Btn.addEventListener('click', () => {
  svgContainer.innerHTML = svg2;
  populateLayers(svg2Layers);
  layerMenu.style.display = 'block';
});

function populateLayers(layers) {
  // Obtém todas as camadas do SVG e as adiciona como checkboxes em um menu retrátil
  const layerList = document.getElementById("layer-list");
  layerList.innerHTML = "";

  for (let i = 0; i < layers.length; i++) {
    const layerName = layers[i];

    // Cria o checkbox para a camada
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = layerName;
    checkbox.checked = i === 0 ? true : false; // Garante que pelo menos uma camada esteja selecionada

    // Cria a label para o checkbox
    const label = document.createElement("label");
    label.htmlFor = layerName;
    label.classList.add("checkbox-container"); // Adiciona a classe checkbox-container para estilizar como botão

    // Cria o botão de marcação
    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark"); // Adiciona a classe checkmark para criar a aparência de botão

    // Adiciona o checkbox e o botão de marcação à label
    label.appendChild(checkbox);
    label.appendChild(checkmark);

    // Adiciona o nome da camada como texto da label
    const layerLabel = document.createElement("span");
    layerLabel.classList.add("checkbox-label");
    layerLabel.textContent = layerName;
    label.appendChild(layerLabel);

    // Adiciona a label à lista de camadas
    layerList.appendChild(label);
  }
}

