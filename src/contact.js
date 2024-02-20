function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
}

export default function loadContact() {
  const main = document.getElementsId("main");
  main.textContext = "";
  main.appendChild(createContact());
}
