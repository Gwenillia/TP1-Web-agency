//nav
function toggleNav() {
    const navToggler = document.getElementById("navLinks");
    navToggler.classList.toggle("displayNav");
}

const links = document.querySelectorAll(".nav__links");
const sections = document.querySelectorAll("section");

function linkState() {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("active"));
    links[index].classList.add("active");
}

linkState();
window.addEventListener("scroll", linkState);

// carousel
function selector(e) {
    const figs = document.getElementsByTagName("figure");
    const slides = document.getElementsByClassName("slide");

    for (i = 0; i < figs.length; i++) {
        if (figs[i].classList.contains("visible")) {
            figs[i].classList.remove("visible");
            figs[i].classList.add("hidden");
        } else {
            figs[i].classList.add("visible");
            figs[i].classList.remove("hidden");
        }
    }

    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("visible")) {
            slides[i].classList.remove("visible");
            slides[i].classList.add("hidden");
        } else {
            slides[i].classList.add("visible");
            slides[i].classList.remove("hidden");
        }
    }
}

//portfolio
