fetch("/css/img/world_interactive.svg")
  .then((response) => response.text())
  .then((svg) => {
    document.getElementById("svg-container").innerHTML = svg;
  })
  .catch((error) => {
    console.error("Error loading SVG:", error);
  });
