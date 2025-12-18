    // Lấy header
    document.getElementById("header").innerHTML =
      doc.getElementById("header").innerHTML;

    // Lấy footer
    document.getElementById("footer").innerHTML =
      doc.getElementById("footer").innerHTML;

// ========== SWITCH IMAGE LOGIC ==========
const buttons = document.querySelectorAll(".lighting-btn");
const img = document.getElementById("lighting-image");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Bỏ active nút cũ
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const mode = btn.dataset.mode;

        img.style.opacity = 0;  // Fade out

        setTimeout(() => {
            img.src = mode === "day" 
                ? "https://nhahangsen.vn/wp-content/uploads/2021/08/vip-3.jpg"
                : "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://nhahangsen.vn/wp-content/uploads/2021/10/about-sp.png";

            img.style.opacity = 1; // Fade in
        }, 300);
    });
});

//Hiệu ứng hành trình phát triển
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".stage", {
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-120%", 0, -500],
                scale: 0.8
            },
            next: {
                translate: ["120%", 0, -500],
                scale: 0.8
            }
        },
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        }
    });
});

const cards = document.querySelectorAll('.chef-card');
let current = 0;

function updateSlider() {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === current) {
      card.classList.add('active');
    }
  });

  const offset = -(current * 340);
  document.querySelector('.slider-track')
    .style.transform = `translateX(${offset}px)`;
}

document.querySelector('.next').onclick = () => {
  current = (current + 1) % cards.length;
  updateSlider();
};

document.querySelector('.prev').onclick = () => {
  current = (current - 1 + cards.length) % cards.length;
  updateSlider();
};

updateSlider();



