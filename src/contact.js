function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "/dist/images/location.PNG";
  restaurantLocation.alt = "Korean Palace Location";

  contact.appendChild(restaurantLocation);

  return contact;
}

export default function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}
