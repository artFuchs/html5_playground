const loadXML = new XMLHttpRequest;
function handler(){
    if(loadXML.readyState == 4 && loadXML.status == 200){
        svgContainer.innerHTML+=loadXML.responseText;
    }
}

if (loadXML != null){
    loadXML.open("GET", "desenho.svg", true);
    loadXML.onreadystatechange = handler;
    loadXML.send();
}

function getTextInsidePath(caminho){
    const svg = document.getElementById("mySVG")
    const caminhoLayer= svg.getElementById("layer1")
    const textoLayer= svg.getElementById("layer2")
    const textos = textoLayer.querySelectorAll("text");

    for (const texto of textos) {
        const textoBounding = texto.getBBox();
        const point1 = svg.createSVGRect();
        point1.x = textoBounding.x;
        point1.y = textoBounding.y;
        
        if (caminho.isPointInFill(point1))
            return texto;
        // if (caminho.isPointInFill(textoDentroDoCaminho.x, textoDentroDoCaminho.y) &&
        //     caminho.isPointInFill(textoDentroDoCaminho.x + textoDentroDoCaminho.width, textoDentroDoCaminho.y) &&
        //     caminho.isPointInFill(textoDentroDoCaminho.x, textoDentroDoCaminho.y + textoDentroDoCaminho.height) &&
        //     caminho.isPointInFill(textoDentroDoCaminho.x + textoDentroDoCaminho.width, textoDentroDoCaminho.y + textoDentroDoCaminho.height)) {
        //         isTextoDentroDoCaminho = true;
        //         break;
        // }
    }
    return null;
}