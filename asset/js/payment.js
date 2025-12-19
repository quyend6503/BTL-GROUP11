// --- PHẦN 1: KHỞI TẠO VÀ HIỂN THỊ GIỎ HÀNG ---
const cart = JSON.parse(localStorage.getItem("cartUI")) || [];
const orderBox   = document.getElementById("orderItems");
const subtotalEl = document.getElementById("subtotal");
const totalEl    = document.getElementById("total");

// Khai báo phí ship và biến lưu tiền giảm giá TOÀN CỤC
const shipping = 30000;
let subtotal = 0;       
let discountValue = 0;  // Quan trọng: Phải khai báo ở đây

// Nếu giỏ trống thì quay về
if (cart.length === 0) {
    alert("Không có sản phẩm trong giỏ");
    window.location.href = "../../trangthucdon.html";
}

// Xóa danh sách cũ và render lại
orderBox.innerHTML = "";

cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal; // Cộng dồn tiền hàng

    orderBox.insertAdjacentHTML("beforeend", `
        <div class="cartui-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cartui-info">
                <h3>${item.name}</h3>
                <div class="cartui-price">
                    Đơn giá: ${item.price.toLocaleString()}đ
                </div>
                <div class="cartui-qty">
                    Số lượng: ${item.qty}
                </div>
            </div>
            <strong>${itemTotal.toLocaleString()}đ</strong>
        </div>
    `);
});

// Hiển thị Tạm tính ban đầu
subtotalEl.textContent = subtotal.toLocaleString() + "đ";
updateTotalDisplay(); // Gọi hàm tính tổng lần đầu

// 1. Lấy các phần tử cần thiết
const methodBanking = document.getElementById("method-banking");
const methodCOD     = document.getElementById("method-cod");
const qrSection     = document.getElementById("qr-section");
const payBtnText    = document.getElementById("payBtn"); // Nút thanh toán

// 2. Hàm xử lý ẩn/hiện
function togglePaymentMethod() {
    if (methodBanking.checked) {
        // Nếu chọn Chuyển khoản -> Hiện QR
        qrSection.style.display = "block";
        // payBtnText.textContent = "ĐÃ CHUYỂN KHOẢN & ĐẶT HÀNG";
    } else {
        // Nếu chọn COD -> Ẩn QR
        qrSection.style.display = "none";
       // payBtnText.textContent = "ĐẶT HÀNG NGAY";
    }
}

// 3. Gắn sự kiện lắng nghe khi người dùng bấm chọn
methodBanking.addEventListener("change", togglePaymentMethod);
methodCOD.addEventListener("change", togglePaymentMethod);

// Gọi 1 lần lúc đầu để kiểm tra trạng thái mặc định
togglePaymentMethod();

// --- PHẦN 2: XỬ LÝ MÃ GIẢM GIÁ (COUPON) ---
const coupons = {
    "GANHQUAN2025": 0.1,      // Giảm 10%
    "HELLO50": 50000,   // Trừ 50k
    "FREESHIP": 30000   // Trừ 30k (miễn ship)
};

const couponInput = document.getElementById("couponCode");
const applyBtn = document.getElementById("applyBtn");
const discountRow = document.getElementById("discountRow");
const discountEl = document.getElementById("discountAmount");

// Sự kiện: Khi nhập text thì nút sáng lên
if (couponInput) {
    couponInput.addEventListener("input", function() {
        if(this.value.trim() !== "") {
            applyBtn.classList.add("active");
            applyBtn.style.background = "#D4AF37";
            applyBtn.style.color = "#121212";
        } else {
            applyBtn.classList.remove("active");
            applyBtn.style.background = "#444";
            applyBtn.style.color = "#aaa";
        }
    });

    // Sự kiện: Bấm nút Áp dụng
    applyBtn.addEventListener("click", function() {
        const code = couponInput.value.trim().toUpperCase();
        
        // Reset lại mỗi lần bấm
        discountValue = 0; 
        
        if (coupons.hasOwnProperty(code)) {
            const value = coupons[code];

            // Logic tính toán: < 1 là phần trăm, > 1 là số tiền
            if (value < 1) { 
                discountValue = subtotal * value; // Ví dụ: 180000 * 0.1 = 18000
            } else {
                discountValue = value;
            }

            // Hiển thị dòng giảm giá (Nếu có HTML discountRow)
            if (discountRow) {
                discountRow.style.display = "flex";
                discountEl.textContent = "-" + discountValue.toLocaleString() + "đ";
            }
            
            alert(`✅ Áp dụng mã ${code} thành công! Bạn được giảm ${discountValue.toLocaleString()}đ`);
        } else {
            if (discountRow) discountRow.style.display = "none";
            alert("❌ Mã giảm giá không tồn tại hoặc đã hết hạn!");
        }

        updateTotalDisplay(); // Tính lại số tổng cuối cùng
    });
}

// Hàm cập nhật hiển thị Tổng tiền (Dùng chung cho cả lúc load và lúc áp mã)
function updateTotalDisplay() {
    let finalPrice = subtotal + shipping - discountValue;
    if (finalPrice < 0) finalPrice = 0;
    
    totalEl.textContent = finalPrice.toLocaleString() + "đ";
}


// --- PHẦN 3: XỬ LÝ NÚT THANH TOÁN (PAYMENT) ---
const payBtn = document.getElementById("payBtn");

payBtn.addEventListener("click", function() {
    // Lấy thông tin khách hàng
    const name    = document.getElementById("fullname").value.trim();
    const phone   = document.getElementById("phone").value.trim();
    const email   = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();

    // Validate dữ liệu
    if (!name || !phone || !email || !address) {
        alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
        return;
    }

    // Regex kiểm tra SĐT và Email
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0)");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        return;
    }

    // Tính tổng cuối cùng để in ra bill
    let finalTotal = subtotal + shipping - discountValue;
    if (finalTotal < 0) finalTotal = 0;

    const billInfo = `
    🎉 ĐẶT HÀNG THÀNH CÔNG!
    --------------------------------------
    👤 Khách: ${name}
    📞 SĐT: ${phone}
    📍 Địa chỉ: ${address}
    --------------------------------------
    📦 Tạm tính: ${subtotal.toLocaleString()}đ
    🚚 Phí ship: ${shipping.toLocaleString()}đ
    🎟️ Giảm giá: -${discountValue.toLocaleString()}đ
    💰 TỔNG THANH TOÁN: ${finalTotal.toLocaleString()}đ
    --------------------------------------
    Cảm ơn bạn đã ủng hộ Gánh Quán!
    `;

    alert(billInfo);
    
    // Xử lý sau khi thành công (Xóa giỏ, chuyển trang...)
    // localStorage.removeItem("cartUI");
    // window.location.href = "../../index.html";
});