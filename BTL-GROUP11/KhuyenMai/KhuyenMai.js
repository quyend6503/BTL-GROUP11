// 1. Load header và footer
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
loadHTML('header', '../layout/Header.html');
loadHTML('footer', '../layout/Footer.html');

/*-------------------Khuyến mại dành cho dùng bữa tại nhà hàng*/
import { KhuyenMai } from '../KhuyenMai/ObjectGanhQuan.js';

const container = document.getElementById('deal-items');

// Duyệt qua từng khuyến mại và tạo thẻ HTML
KhuyenMai.forEach(promo => {
  const div = document.createElement('div');
  div.className = 'deal-item';
  div.innerHTML = `
     <div class="deal-image">
        <img src="${promo.image}" alt="${promo.title}">
    </div>
    <div class="deal-content">
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
        <ul>${promo.content}</ul>
    </div>
    `;
  container.appendChild(div);

  // Thêm sự kiện click nếu muốn
  div.addEventListener('click', () => {
    alert('Bạn chọn: ' + promo.title);
  });
});
/*-------------------Ưu đãi dành cho giao hàng và nhận hàng*/
import { uudai } from '../KhuyenMai/ObjectGanhQuan.js';
const uudaiContainer = document.getElementById('dealsship');

uudai.forEach(promo => {
  const div = document.createElement('div');
  div.className = 'dealsship';
  div.innerHTML = `
        <div class="uudai-image">
            <img src="${promo.image}" alt="${promo.title}">
        </div>
        <div class="uudai-content">
            <h3>${promo.title}</h3>
            <p>${promo.description}</p>
            <ul>${promo.content}</ul>
        </div>
    `;
  uudaiContainer.appendChild(div);
});

/*-------------------Mở hộp quà*/
import { Secret } from '../KhuyenMai/ObjectGanhQuan.js';

const box = document.getElementById('secret-container');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Shuffle trước khi hiển thị
shuffleArray(Secret).forEach(sec => {
  const div = document.createElement('div');
  div.className = 'secret-box';
  div.innerHTML = `
        <img src="${sec.image}" alt="${sec.title}" class="box-img">
        <p class="promo-code"></p>
    `;
  box.appendChild(div);

  const img = div.querySelector('.box-img');
  const codeDisplay = div.querySelector('.promo-code');

  img.addEventListener('click', () => {

    document.querySelectorAll('.promo-code').forEach(el => {
      el.textContent = '';
    });

    // Hiển thị mã khuyến mại cho hộp này
    codeDisplay.textContent = `Mã khuyến mại: ${sec.code}${sec.content}`;
  });
});


