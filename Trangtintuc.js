/* Load header & footer
includeHTML("header", "header.html");
includeHTML("footer", "footer.html");*/

// Chờ toàn bộ DOM load xong rồi mới chạy slider
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".thumb-gallery").forEach(gallery => {
        let slides = gallery.querySelectorAll(".slide");
        let index = 0;

        const showSlide = i => {
            slides.forEach(s => s.classList.remove("active"));
            slides[i].classList.add("active");
        };

        gallery.querySelector(".next").onclick = () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        };

        gallery.querySelector(".prev").onclick = () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        };
    });

});
