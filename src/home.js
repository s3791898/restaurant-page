function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefsImage = document.createElement("img");
  chefsImage.src = "/dist/images/chefs.jpg";
  chefsImage.alt = "Korean Food";
  home.appendChild(chefsImage);

  const paragraph1 = createParagraph(
    "Welcome to Korean Palace, your destination for authentic Korean cuisine!"
  );
  const paragraph2 = createParagraph(
    "At Korean Palace, we pride ourselves on serving delicious and flavorful dishes that capture the essence of Korean flavors."
  );
  const paragraph3 = createParagraph(
    "From spicy kimchi to savory tteokbokki, our menu offers a wide variety of options to satisfy your cravings for korean cuisine."
  );

  home.appendChild(paragraph1);
  home.appendChild(paragraph2);
  home.appendChild(paragraph3);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}
