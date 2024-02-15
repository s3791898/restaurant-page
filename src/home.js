export function loadPage() {
  const contentDiv = document.getElementById("content");
  createHomepageContent(contentDiv);
}

function createHomepageContent(parentElement) {
  const image = document.createElement("img");
  image.src = "/dist/images/restaurant.jpg";
  image.classList.add("homepage-image");
  parentElement.appendChild(image);

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant!";
  parentElement.appendChild(headline);

  const description = document.createElement("p");
  description.textContent =
    "We pride ourselves on serving delicious, authentic ramen dishes made with the freshest ingredients. Our cozy restaurant provides a warm and inviting atmosphere for you to enjoy a delightful dining experience with family and friends. Come visit us and taste the flavors of Japan!";
  parentElement.appendChild(description);
}
