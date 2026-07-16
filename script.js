// Highlight active navigation link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
// Dark Mode

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent="☀️";
    }else{
        themeBtn.textContent="🌙";
    }

});
const text = "Aspiring Software Developer";
let index = 0;

function typeEffect() {

    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }

}

typeEffect();
// Scroll Reveal Animation

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach((el) => {
    el.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
});

hiddenElements.forEach((el) => observer.observe(el));