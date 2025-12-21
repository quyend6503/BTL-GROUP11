// =================== LOAD HEADER & FOOTER ===================
async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error("Không thể load " + file);
    element.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "../../layout/header.html");
  includeHTML("footer", "../../layout/footer.html");
});

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
