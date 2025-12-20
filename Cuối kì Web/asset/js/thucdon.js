// ================= SLIDER =================
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

let slideInterval = setInterval(nextSlide, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  });
});

// ================= LOAD HEADER & FOOTER =================
document.addEventListener("DOMContentLoaded", () => {

  // HEADER
  fetch("../../layout/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    });

  // FOOTER
  fetch("../../layout/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });

  // Mặc định mở "Tất cả"
  const allBtn = document.querySelector('li[data-type="all"] .menu-title');
  if (allBtn) allBtn.click();
});

// ================= MENU =================
document.querySelectorAll(".parent .menu-title").forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("open");
  });
});

// ================= LOAD PAGE =================
function loadPage(file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("product-list");
      container.innerHTML = html;

      // chạy lại script trong file load
      container.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        newScript.textContent = oldScript.textContent;
        document.body.appendChild(newScript);
        oldScript.remove();
      });
    })
    .catch(err => console.error("Không thể tải trang:", err));
}
