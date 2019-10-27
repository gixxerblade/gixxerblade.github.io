let resume = document.getElementById("resume");
let skills = document.getElementById("skills");
let aboutme = document.getElementById("aboutme");
let contact = document.getElementById("contact");
let resumeLink = document.getElementById("resumeLink");
let skillLink = document.getElementById("skillsLink");
let aboutmeLink = document.getElementById("aboutmeLink");
let contactLink = document.getElementById("contactLink");

resumeLink.addEventListener("click", () => {
  let top = resume.offsetTop;
  window.scrollTo(0, top);
});

skillLink.addEventListener("click", () => {
  let top = skills.offsetTop;
  window.scrollTo(0, top);
});

aboutmeLink.addEventListener("click", () => {
  let top = aboutme.offsetTop;
  window.scrollTo(0, top);
});

contactLink.addEventListener("click", () => {
   let top = contact.offsetTop;
  window.scrollTo(0, top);
});
