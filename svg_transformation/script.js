$(document).ready(function(){
  carregarSVG("desenho.svg")
})

function carregarSVG(file) {
  var svgContainer = document.getElementById("svg-container");

  fetch(file)
      .then(response => response.text())
      .then(svgContent => {
    svgContainer.innerHTML = svgContent;
  });
}