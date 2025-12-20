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
loadHTML('header', '../layout/header.html');
loadHTML('footer', '../layout/footer.html');

/*-------------------Khuyến mại dành cho dùng bữa tại nhà hàng*/
import { KhuyenMai } from '../script/ObjectGanhQuan.js';

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
import { uudai } from '../script/ObjectGanhQuan.js';
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
/*import { Secret } from '../KhuyenMai/ObjectGanhQuan.js';

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
        <p class="promo-code"></p>
        <img src="${sec.image}" alt="${sec.title}" class="box-img">
        
    `;
  box.appendChild(div);

  const img = div.querySelector('.box-img');
  const codeDisplay = div.querySelector('.promo-code');

  img.addEventListener('click', () => {

    // Ẩn tất cả các hộp khác
    document.querySelectorAll('.secret-box').forEach(b => {
        if(b !== div) b.style.display = 'none';
    });    
    codeDisplay.innerHTML = `Mã khuyến mại: ${sec.code}<br>${sec.content}`;

        // Hiển thị container nút
    box.style.display = 'block';
    copyBtn.textContent = sec.code; // Hiển thị mã trên nút
  });

  // Copy mã khi click nút
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(sec.code).then(() => {
      copyBtn.textContent = 'Đã copy!';
      setTimeout(() => copyBtn.textContent = sec.code, 1500);
    });
  });
});*/

import { Secret } from '../script/ObjectGanhQuan.js';

const box = document.getElementById('secret-container');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(Secret).forEach(sec => {
  const div = document.createElement('div');
  div.className = 'secret-box';
  div.innerHTML = `
        <img src="${sec.image}" alt="${sec.title}" class="box-img">
        <div class="promo-container" style="display:none;">
            <button class="copy-btn">Mã khuyến mại</button>
        </div>
    `;
  box.appendChild(div);

  const img = div.querySelector('.box-img');
  const promoContainer = div.querySelector('.promo-container');
  const copyBtn = div.querySelector('.copy-btn');

  img.addEventListener('click', () => {
    // Ẩn tất cả các hộp khác
    document.querySelectorAll('.secret-box').forEach(b => {
      if(b !== div) b.style.display = 'none';
    });

    // Hiển thị container nút
    promoContainer.style.display = 'block';
    copyBtn.innerHTML = sec.code; 
  });

  // Copy mã khi click nút
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(sec.code).then(() => {
      copyBtn.textContent = 'NHẬN MÃ THÀNH CÔNG!';
      setTimeout(() => copyBtn.textContent = sec.code, 1500);
    });
  });
});


