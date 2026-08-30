    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});



const sky = document.querySelector(".img2");
const web = document.querySelector(".img");
const web2 = document.querySelector(".img1");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    sky.style.transform = `translate(-50%, ${scroll * 0.6}px)`;
    web.style.transform = `translate(-50%, ${scroll * 0.2}px)`;
    // web2.style.transform = `translate(-50%, ${scroll * 0.4}px)`;
});
