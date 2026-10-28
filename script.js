// menu mobile : ouvre / ferme la navigation
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

if (burger) {
    burger.addEventListener("click", () => {
        const ouvert = nav.classList.toggle("ouvert");
        burger.setAttribute("aria-expanded", ouvert);
        burger.querySelector("i").className = ouvert ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    });

    nav.querySelectorAll("a").forEach((lien) => {
        lien.addEventListener("click", () => {
            nav.classList.remove("ouvert");
            burger.setAttribute("aria-expanded", "false");
            burger.querySelector("i").className = "fa-solid fa-bars";
        });
    });
}
