function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h1");
  title.classList.add("contact-title");
  title.textContent = "Our Contact Information";
  contact.appendChild(title);

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("contact-info");
  phoneNumber.textContent = "Phone 📞: 123-456-7890";
  contact.appendChild(phoneNumber);

  const email = document.createElement("p");
  email.classList.add("contact-info");
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:info@koreanpalace.com";
  emailLink.textContent = "Email 📧: info@koreanpalace.com";
  email.appendChild(emailLink);
  contact.appendChild(email);

  const address = document.createElement("p");
  address.classList.add("contact-info");
  address.textContent =
    "Address 📍: 123 Kangaroo Street, Melbourne, VIC 2000 Australia";
  contact.appendChild(address);

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");
  mapContainer.innerHTML = `
    <iframe
      width="600"
      height="450"
      style="border:0"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.13856289654!2d144.9601902773965!3d-37.81022330151559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d09f9e0119d%3A0xbac969c018545456!2sMansae%20Korean%20BBQ%20-%20CBD!5e0!3m2!1sen!2sau!4v1708495898418!5m2!1sen!2sau"
    >
    </iframe>
  `;
  contact.appendChild(mapContainer);

  return contact;
}

export default function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}
