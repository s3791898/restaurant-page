import bibimbapImage from "/src/images/korean-food/bibimbap.jpg";
import jajangmyeonImage from "/src/images/korean-food/jajangmyeon.jpg";
import kimbapImage from "/src/images/korean-food/kimbap.jpg";
import naengmyeonImage from "/src/images/korean-food/naengmyeon.jpg";
import samgyetangImage from "/src/images/korean-food/samgyetang.jpg";
import tteokbokkiImage from "/src/images/korean-food/tteokbokki.jpg";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our Menu";
  menuTitle.classList.add("menu-title");
  main.appendChild(menuTitle);

  menu.appendChild(
    createMenuItem(
      "Bibimbap",
      bibimbapImage,
      "Delicious Korean rice dish with mixed vegetables, meat, sesame oil, and gochujang"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Jajangmyeon",
      jajangmyeonImage,
      "Korean noodle dish consisting of a rich, dark sauce made from black bean paste then poured over fresh noodles"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Kimbap",
      kimbapImage,
      "Made from cooked rice, vegetables, egg and meat rolled in gim (a dried sheet of seaweed)"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Naengmyeon",
      naengmyeonImage,
      "Buckwheat noodles served in a cold broth made with beef brisket or beef shank"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Samgyetang",
      samgyetangImage,
      "Traditional korean soup made with a whole young chicken stuffed with sticky rice, ginseng, jujube, garlic and ginger"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Tteokbokki",
      tteokbokkiImage,
      "Korean street food made with chewy rice cakes stir-fried in a spicy-sweet gochujang sauce"
    )
  );

  return menu;
}

function createMenuItem(name, imageUrl, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const menuItemName = document.createElement("h2");
  menuItemName.textContent = name;

  const menuItemDescription = document.createElement("p");
  menuItemDescription.textContent = description;

  const menuItemImage = document.createElement("img");
  menuItemImage.src = imageUrl;
  menuItemImage.alt = `An image of ${name}`;

  menuItem.appendChild(menuItemName);
  menuItem.appendChild(menuItemImage);
  menuItem.appendChild(menuItemDescription);

  return menuItem;
}

export default function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}
