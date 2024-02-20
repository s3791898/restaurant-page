// This js file will import all the necessary methods
// And this will export 1 function to index.js that handles everything
// Need to add event listeners to each button in the nav bar (home, contact, and menu)
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Still working on this
// the nav needs to be appended to the header section
function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  return nav;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

// Still working on this

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  return footer;
}

export default function generateWebsite() {
  // the homepage will be the initial page shown when the page is first loaded
  loadHome();
}
