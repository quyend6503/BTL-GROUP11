// Hàm load file HTML vào 1 thẻ
function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error('Không tải được file: ' + file);
      return response.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error(err));
}

// Load header và footer
loadHTML('header', '../layout/header.html');
loadHTML('footer', '../layout/footer.html');


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
                ? "../img/ImgAboutUs/ngay1.jpg"
                : "../img/ImgAboutUs/toi2.jpg";

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



