const letters = ['web developer and', 'web designer']

gsap.to(".line" , {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power2.inOut"
});

let time = gsap.timeline({
    repeat: -1
});

letters.forEach((word) => {
    let textAll = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    });
    textAll.to(".animation-first", {
        duration: 1.6,
        text: word,
    });
    time.add(textAll);
})


const moreContent = document.getElementById("moreContent");
const content = document.getElementById("content")

moreContent.addEventListener('click', function() {
   if ( content.style.display === "none") {
        content.style.display = "block";
        moreContent.textContent = "Hide prodjects";
    } else { 
        content.style.display = "none";
        }
} )


let menuBurger = document.querySelector("#menu-burger");
let changes = document.querySelector("#menu");

menuBurger.addEventListener("click", function() {
    this.classList.toggle("close");
    changes.classList.toggle("changes");
})

