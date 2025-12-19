// Chờ DOM tải xong (nhờ defer trong <head>)
const slidesContainer = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;
const totalSlides = dots.length;

function showSlide(i) {
  slidesContainer.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
  index = i;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

// Tự chuyển sau 5 giây
let slideInterval = setInterval(nextSlide, 5000);

// Khi click vào dot → chuyển slide
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    clearInterval(slideInterval);         // tạm dừng auto
    slideInterval = setInterval(nextSlide, 5000); // chạy lại sau đó
  });
});


document.querySelectorAll(".parent .menu-title").forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.classList.toggle("open");
    });
});
// Mặc định mở "Tất cả" khi load trang
window.addEventListener("DOMContentLoaded", () => {
    const allBtn = document.querySelector('li[data-type="all"] .menu-title');
    if (allBtn) allBtn.click();
});

// Load thực đơn từ file HTML bên ngoài
function loadPage(file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById("product-list");
            container.innerHTML = html;

            // chạy lại <script> trong html
            const scripts = container.querySelectorAll("script");
            scripts.forEach(oldScript => {
                const newScript = document.createElement("script");
                newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript);
                oldScript.remove();
            });
        })
        .catch(err => console.error("Không thể tải trang:", err));
}




