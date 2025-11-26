// ------------------- Slider Thực Đơn Nổi Bật -------------------
const track = document.getElementById('track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotsWrap = document.getElementById('dots');

const slides = Array.from(track.children);
const total = slides.length;
let index = 0;
let autoTimer = null;

// Tạo dot navigation
slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.setAttribute('aria-label', 'Đi tới slide ' + (i + 1));
  d.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(d);
});
const dots = Array.from(dotsWrap.children);

// Cập nhật slider
function update() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

// Điều hướng slide
function goTo(i) {
  index = (i + total) % total;
  update();
  restartAuto();
}
function nextSlide() { goTo(index + 1); }
function prevSlide() { goTo(index - 1); }

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto slide
function startAuto() { autoTimer = setInterval(nextSlide, 3500); }
function stopAuto() { clearInterval(autoTimer); autoTimer = null; }
function restartAuto() { stopAuto(); startAuto(); }
startAuto();

// Dừng khi hover
const slider = document.getElementById('slider');
slider.addEventListener('mouseenter', stopAuto);
slider.addEventListener('mouseleave', startAuto);

// Touch event cho mobile
let startX = 0, isDown = false;
slider.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].clientX;
  stopAuto();
});
slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const dx = e.touches[0].clientX - startX;
  if (Math.abs(dx) > 40) {
    dx > 0 ? prevSlide() : nextSlide();
    isDown = false;
  }
});
slider.addEventListener('touchend', () => {
  isDown = false;
  startAuto();
});

// Dùng phím mũi tên
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

window.addEventListener('resize', update);

// ------------------- Load header & footer -------------------
async function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (!file) return; // nếu chưa điền file thì không làm gì
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error('Không thể tải ' + file);
    const html = await response.text();
    element.innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}
const video = document.getElementById('bannerVideo');
const btn = document.getElementById('btnSoundToggle');

// Video mặc định mute để autoplay
video.muted = true;

// Nút bật/tắt âm thanh
btn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    btn.textContent = '🔊';
  } else {
    video.muted = true;
    btn.textContent = '🔈';
  }
});



// Điền đường dẫn file HTML cho header & footer
includeHTML("header", "header.html");
includeHTML("footer", "footer.html");


