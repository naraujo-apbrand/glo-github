const menuToggle = document.getElementById("menuToggle");
const barsIcon = menuToggle.querySelector(".fa-bars");
const xmarkIcon = menuToggle.querySelector(".fa-xmark");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const menuBox = document.querySelector(".menu-box");
const btnServicios = document.getElementById("btn-servicios");

menuToggle.addEventListener("click", () => {
    barsIcon.classList.toggle("d-none");
    xmarkIcon.classList.toggle("d-none");
    if (menuBox.classList.contains("d-none")) {
        menuBox.classList.remove("d-none");
        main.classList.add("d-none");
        footer.classList.add("d-none");
    } else {
        menuBox.classList.add("d-none");
        main.classList.remove("d-none");
        footer.classList.remove("d-none");
    }
});

btnServicios.addEventListener("click", () => {
    menuBox.classList.add("d-none");
    main.classList.remove("d-none");
    footer.classList.remove("d-none");
    barsIcon.classList.toggle("d-none");
    xmarkIcon.classList.toggle("d-none");
});
