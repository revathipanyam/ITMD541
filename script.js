const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");


function showAbout() {
    aboutSection.style.display = "block";
    contactSection.style.display = "none";
}


function showContact() {
    contactSection.style.display = "block";
    aboutSection.style.display = "none";
}

showAbout();


aboutLink.addEventListener("click", showAbout);
contactLink.addEventListener("click", showContact);