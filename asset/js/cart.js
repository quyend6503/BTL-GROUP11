localStorage.removeItem("cartUI");
let cartUI = JSON.parse(localStorage.getItem("cartUI")) || [];

const wrap = document.getElementById("cartuiWrapper");
const overlay = document.getElementById("cartuiOverlay");
const closeBtn = document.getElementById("cartuiClose");
const itemBox = document.getElementById("cartuiItems");
const subtotalEl = document.getElementById("cartuiSubtotal");
const totalEl = document.getElementById("cartuiTotal");

function openCartUI() {
    wrap.classList.add("open");
    overlay.style.display = "block";
}

function closeCartUI() {
    wrap.classList.remove("open");
    overlay.style.display = "none";
}

closeBtn.onclick = closeCartUI;
overlay.onclick = closeCartUI;

function saveCart() {
    localStorage.setItem("cartUI", JSON.stringify(cartUI));
}
function updateCartCount() {
    const countEl = document.getElementById("cartCount");
    const totalQty = cartUI.reduce((sum, item) => sum + item.qty, 0);
    countEl.textContent = totalQty;
}

function renderCart() {
    itemBox.innerHTML = "";
    let total = 0;

    cartUI.forEach((item, i) => {
        total += item.price * item.qty;

        itemBox.innerHTML += `
            <div class="cartui-item">
                <img src="${item.img}">
                <div class="cartui-info">
                    <h3>${item.name}</h3>
                    <div class="cartui-price">Đơn giá: ${item.price.toLocaleString()}đ</div>
                    <div class="cartui-option">Loại: ${item.option || "Mặc định"}</div>
                    <div class="cartui-note">Ghi chú: ${item.note || "Không có"}</div>
                    <div class="cartui-qty">
                        <button onclick="changeQty(${i}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${i}, +1)">+</button>
                    </div>

                    <div class="cartui-remove" onclick="removeItem(${i})">
                        🗑 Xóa
                    </div>
                </div>

                <strong>${(item.price * item.qty).toLocaleString()}đ</strong>
            </div>
        `;
    });

    subtotalEl.textContent = total.toLocaleString() + "đ";
    totalEl.textContent = total.toLocaleString() + "đ";
    updateCartCount(); 
}

function changeQty(i, n) {
    cartUI[i].qty += n;
    if (cartUI[i].qty <= 0) cartUI.splice(i, 1);
    saveCart();
    renderCart();
}

function removeItem(i) {
    cartUI.splice(i, 1);
    saveCart();
    renderCart();
}

window.addToCart = function (name, price, optionName,note, img) {
    // đảm bảo price là number
    const numericPrice = Number(price) || 0;

    // tạo key duy nhất: tên + option (để phân biệt cùng tên nhưng option khác)
    const key = name + " | " + (optionName || "")+ " | " +(note || "");

    const exist = cartUI.find(x => x.key === key);

    if (exist) {
        exist.qty++;
    } else {
        cartUI.push({
            key: key,            // dùng để kiểm tra trùng
            name: name,          // tên hiển thị
            option: optionName || "", // lưu option để hiển thị
            note: note,
            price: numericPrice, // giá đơn vị (số)
            img: img,            // ảnh
            qty: 1
        });
    }

    saveCart();
    renderCart();
    openCartUI();
};


renderCart();
updateCartCount();

const continueBtn = document.getElementById("cartuiContinue");

continueBtn.onclick = function (e) {
    e.preventDefault();
    closeCartUI();  // chỉ đóng popup
};

