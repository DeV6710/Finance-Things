let units = document.querySelectorAll(".units");

units.forEach(function(unit){
    unit.onclick = function(){
        let dropdown = unit.nextElementSibling; 
        dropdown.classList.toggle("pressed");
        let  img = unit.querySelector("img")
        img.classList.toggle("arrows")
    }
});


let menu = document.getElementById("menu")
let navLinks = document.querySelector(".nav-links")

menu.onclick = function(){
    navLinks.classList.toggle("menuitmes")
}
