function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const restaurantImage = document.createElement("img");
  restaurantImage.src = "/dist/images/restaurant.jpg";
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default function loadHome() {
  const main = document.getElementById("main");
  main.textContext = "";
  main.appendChild(createHome())
}
