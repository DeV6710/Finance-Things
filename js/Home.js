const database = firebase.database().ref()


let namer = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("text")
let submit = document.getElementById("submit")
let date = new Date()
submit.onclick = sent

function sent(e){
    e.preventDefault()
         const data = {
        NAME:namer.value,
        EMAIL:email.value,
        DATE: date.toString(),
        MESSAGE: message.value
    }
    database.push(data)
    namer.value = ""
    email.value = ""
    message.value = ""
}

let menu = document.getElementById("menu")
let navLinks = document.querySelector(".nav-links")

menu.onclick = function(){
    navLinks.classList.toggle("menuitmes")
}

