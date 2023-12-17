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

colors.forEach((hexCode) => {
  // 1. Ein neues <div> Element erstellen mit der Variable colorBox
  const colorBox = document.createElement("div");

  // 2. Die Class 'color-box' hinzufügen
  colorBox.classList.add("color-box");

  // 3. Die Hintergrundfarbe auf den aktuellen Hex-Code setzen
  colorBox.style.backgroundColor = hexCode;

  // 4. Das erstellte <div> der Seite hinzufügen, sonst schwebt es im Luftleeren-Raum und es wird nichts angezeigt.
  document.body.append(colorBox);
});

/*colors.forEach((hexCode) => {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-Box");
  colorBox.style.backgroundColor = hexCode;
  document.body.append(colorBox);
}*/