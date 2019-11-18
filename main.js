let links = document.querySelectorAll(".link");
let targets = document.querySelectorAll(".target");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    let top = targets[i].offsetTop;
    window.scrollTo(0, top);
  });
}
