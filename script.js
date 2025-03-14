const topbtn = document.querySelector(".top_arrow");

window.addEventListener("scroll", () => {
    if (window.scrollY > 720) {
        topbtn.classList.add("show-arrow");
    } else {
        topbtn.classList.remove("show-arrow");
    }
});
// const fixhead = document.querySelector("header");

// window.addEventListener("scroll", () => {
//     if (window.scrollY >750) {
//         fixhead.classList.add("fixed-top");
//     } else {
//         fixhead.classList.remove("fixed-top");
//     }
// });
