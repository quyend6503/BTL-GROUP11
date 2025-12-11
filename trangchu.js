// =================== LOAD HEADER & FOOTER ===================
async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (!file) return;
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error('Không thể tải ' + file);
    const html = await response.text();
    element.innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

includeHTML("header", "header.html");
includeHTML("footer", "footer.html");



// =================== SLIDER BANNER ẢNH ===================
const bannerSlides = document.querySelectorAll(".slider-banner img");
let currentSlide = 0;

function showSlideBanner(i) {
  bannerSlides.forEach(slide => slide.classList.remove("active"));
  bannerSlides[i].classList.add("active");
}

// Nút điều hướng banner
document.getElementById("nextSlide").onclick = () => {
  currentSlide = (currentSlide + 1) % bannerSlides.length;
  showSlideBanner(currentSlide);
};

document.getElementById("prevSlide").onclick = () => {
  currentSlide = (currentSlide - 1 + bannerSlides.length) % bannerSlides.length;
  showSlideBanner(currentSlide);
};

// Auto chạy banner
setInterval(() => {
  currentSlide = (currentSlide + 1) % bannerSlides.length;
  showSlideBanner(currentSlide);
}, 4000);

let luxuryIndex = 0;

const luxuryTrack = document.getElementById("luxuryTrack");
const luxurySlides = document.querySelectorAll(".promo-board");
const luxuryTotal = luxurySlides.length;

function updateLuxury() {
  luxuryTrack.style.transform = `translateX(-${luxuryIndex * 100}%)`;
}

function nextLuxury() {
  luxuryIndex++;
  if (luxuryIndex >= luxuryTotal) luxuryIndex = 0;
  updateLuxury();
}

function prevLuxury() {
  luxuryIndex--;
  if (luxuryIndex < 0) luxuryIndex = luxuryTotal - 1;
  updateLuxury();
}

// ✅ Tự động trượt sau mỗi 5 giây
setInterval(nextLuxury, 5000);
