document.addEventListener("DOMContentLoaded", () => {
    const hamburguer = document.querySelector(".hamburguer");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelector(".nav-links li a");
    hamburguer.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    })
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("show")
        })
    })
})