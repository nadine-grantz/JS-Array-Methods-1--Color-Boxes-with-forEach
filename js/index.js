const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
]; // das ist ein Array

// ab hier ändern

//colors.forEach();

// Ein neues div-Element erstellen
function createColorBox(hexCode) {
  const colorBox = document.createElement("div");

  // Die Klasse "color-box" dem neuen div hinzufügen
  colorBox.classList.add("color-box");

  // Die Hintergrundfarbe des div auf den aktuellen Hex-Code setzen
  colorBox.style.backgroundColor = hexCode;

  return colorBox;
}

// Auf das vollständige Laden des DOM-Inhalts warten
document.addEventListener("DOMContentLoaded", function () {
  // Das Container-Element per ID abrufen
  const colorContainer = document.getElementById("color-container");

  // Über das colors-Array mit forEach iterieren und jedes div dem Container hinzufügen
  colors.forEach((hexCode) => {
    const colorBox = createColorBox(hexCode);
    colorContainer.appendChild(colorBox);
  });
});