function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var img = element.querySelector(".light")
    img.src.includes("dark") ? img.src = "img/light.png" : img.src = "img/dark.png";
 }