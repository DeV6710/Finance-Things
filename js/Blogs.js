// const Blogs = `{
//     "blog1": {
//         "Title": "Why Starting to Save Early Is Like a Superpower",
//         "Date": "8/13/25",
//         "Content": "Have you ever wondered what would happen if you started saving early?",
//         "Author": "Avery"
//     }
// }`;

// let blogss = JSON.parse(Blogs);

    
//     for(let blog in blogss){
//         for(let prop in blogss[blog]){
//             console.log(blogss[])
//         }
//     }



    let menu = document.getElementById("menu")
    let navLinks = document.querySelector(".nav-links")

    menu.onclick = function(){
        navLinks.classList.toggle("menuitmes")
    }


let Links = document.querySelectorAll(".blogs a");

Links.forEach(function (e) {
    e.addEventListener("click", function (event) {
        event.preventDefault();

        let title = this.parentElement.querySelector("h1").textContent;
        let date = this.parentElement.querySelector("p").textContent;
        let author = this.parentElement.querySelector("h3").textContent;
        let img = this.parentElement.querySelector("img").src;

        this.parentElement.remove();

        let blogDiv = document.createElement("div");
        blogDiv.classList.add("blog1Content");
        blogDiv.style.marginTop = "100px";

        blogDiv.innerHTML = `
            <h1>${title}</h1>
            <p>${date}</p>
            <h3>${author}</h3>
            <img src="${img}">
            <h2>
            
            Starting to save early is like unlocking a secret superpower because it gives you the ability to harness the magic of compound interest. When you save money, that money can earn interest, and over time, the interest itself also starts earning interest. This snowball effect means even small amounts saved consistently can grow into something much larger than you might expect. The earlier you start, the more time your money has to multiply, making your future financial self much stronger. It’s like planting a seed that grows into a mighty tree — the sooner you plant it, the taller and stronger it becomes.
Another reason early saving is a superpower is that it builds financial confidence and resilience. Life is full of unexpected twists, and having savings means you’re better prepared to handle them without stress or panic. When you start early, you get into the habit of setting money aside before you’re in situations where you desperately need it. This creates a safety net for emergencies, opportunities, or even big dreams. Like a superhero’s shield, your savings can protect you from financial “villains” such as debt or high-interest loans.
Early saving also gives you freedom — the kind most people dream about. By starting sooner, you don’t have to save as aggressively later, because your money has been working for you in the background for years. This can mean retiring earlier, traveling more, or pursuing passions without worrying constantly about money. The earlier you start, the more choices you have later in life. It’s the difference between reacting to life’s demands and actively shaping the life you want. In superhero terms, it’s the power to control your own storyline.
Finally, starting to save early teaches you discipline, patience, and long-term thinking — three traits that are valuable far beyond finances. It shifts your mindset from short-term gratification to long-term rewards, which can benefit your career, relationships, and personal growth. Like a superhero training before the big battle, you’re building habits and skills that will serve you in every part of your life. Saving early isn’t just about money — it’s about giving your future self the best possible advantage, so when challenges come, you’re already ready to win.
            
            
            
            </h2>
        `;

        document.body.appendChild(blogDiv);
    });
});



