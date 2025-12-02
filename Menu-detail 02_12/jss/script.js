let dIndex = 0;
let typingTimer;
const typingSpeed = 35;
let dialogues = [];     // dữ liệu hội thoại của món ăn
// ===============  HÀM MỞ MÓN TỪ INDEX  ==================
function openDish(url) {

    fetch(url)
        .then(res => res.text())
        .then(html => {
            // Gắn nội dung popup vào index
            document.getElementById("popup-container").innerHTML = html;
            // 1) KÍCH HOẠT LẠI TOÀN BỘ <script> TRONG POPUP
            const scripts = document
                .getElementById("popup-container")
                .querySelectorAll("script");

            scripts.forEach(oldScript => {
                const newScript = document.createElement("script");

                if (oldScript.src) newScript.src = oldScript.src;
                else newScript.textContent = oldScript.textContent;

                document.body.appendChild(newScript);
            });

            // 2) ĐĂNG KÝ LẠI SỰ KIỆN RADIO (vì popup vừa được tạo)
            setTimeout(() => {
                document.querySelectorAll('input[name="option"]').forEach(radio => {
                    radio.addEventListener("change", updatePrice);
                });

                // Cập nhật giá ban đầu
                updatePrice();

                // Mở popup
                openPopup();

            }, 100); // delay 0.1s để DOM có thời gian render
        });
}

// ===============  MỞ / ĐÓNG POPUP  ======================

function openPopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    setTimeout(() => overlay.classList.add('show'), 10);

    // Reset hội thoại
    dIndex = 0;

    // Bắt đầu hội thoại
    const dlg = document.getElementById('dialoguePopup');
    if (dlg) dlg.style.display = 'block';
 document.getElementById("overlay").classList.add("active");
    document.querySelector(".menu-popup").classList.add("active");
    showDialogue();
}


function closePopup() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('show');

    setTimeout(() => overlay.style.display = 'none', 300);

    const dlg = document.getElementById('dialoguePopup');
    if (dlg) dlg.style.display = 'none';
 document.getElementById("overlay").classList.remove("active");
    document.querySelector(".menu-popup").classList.remove("active");
    dIndex = 0;
}


// Danh sách ảnh của món ăn
let dishImages = [
    "images/caithia.jpg",
    "images/caithia2.jpg",
    "images/caithia3.jpg"
];

// Ảnh hiện tại
let imgIndex = 0;

function updateImage() {
    document.getElementById("dishImage").src = dishImages[imgIndex];
}

function nextImage() {
    imgIndex = (imgIndex + 1) % dishImages.length;
    updateImage();
}

function prevImage() {
    imgIndex = (imgIndex - 1 + dishImages.length) % dishImages.length;
    updateImage();
}

// ===============  TÍNH GIÁ MÓN ĂN  =======================
function updatePrice() {

    const basePrice = Number(document.body.dataset.price || 0);
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const extra = Number(selectedOption?.value || 0);

    const total = basePrice + extra;

    if (document.getElementById('totalPrice')) {
        document.getElementById('totalPrice').textContent =
            total.toLocaleString('vi-VN') + 'đ';
    }
}

// ===============  TOAST THÔNG BÁO  =======================

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');

    setTimeout(() => toast.classList.remove('show'), 2000);
}

function addToCart() {
    showToast("Đã thêm vào giỏ hàng!");
}

// ===============  PHẦN HỘI THOẠI  ========================

function showDialogue() {

    if (!dialogues || dialogues.length === 0) return;

    if (dIndex >= dialogues.length) {
        setTimeout(() => {
            const dlg = document.getElementById('dialoguePopup');
            if (dlg) dlg.style.display = 'none';
        }, 1000);
        return;
    }

    const current = dialogues[dIndex];
    let i = 0;

    const textDiv = document.getElementById('dialogueText');
    const choiceDiv = document.getElementById('dialogueChoices');

    if (!textDiv || !choiceDiv) return;

    textDiv.textContent = "";
    choiceDiv.innerHTML = "";
    clearInterval(typingTimer);

    typingTimer = setInterval(() => {

        if (i < current.text.length) {
            textDiv.textContent += current.text.charAt(i);
            i++;

        } else {
            clearInterval(typingTimer);

            // Có lựa chọn mới hiện nút
            if (current.choices) {

                current.choices.forEach(choice => {
                    const btn = document.createElement("button");
                    btn.textContent = choice;
                    btn.onclick = () => handleChoice(choice);
                    choiceDiv.appendChild(btn);
                });

            } else {
                setTimeout(() => {
                    dIndex++;
                    showDialogue();
                }, 1200);
            }
        }

    }, typingSpeed);
}


function handleChoice(choice) {

    // xử lý lựa chọn
    if (choice === "Thêm nấm (+10k)") {
        document.querySelector('input[value="10000"]').checked = true;
        showToast("Nấm đến ngay");
    } else if (choice === "Thêm rau (+15k)") {
        document.querySelector('input[value="15000"]').checked = true;
        showToast("Rau xanh tới liền");
    } else if (choice === "Thêm thịt (+30k)") {
        document.querySelector('input[value="30000"]').checked = true;
        showToast("Thịt boà tới đây");
    } else if (choice === "Thêm tôm (+50k)") {
        document.querySelector('input[value="50000"]').checked = true;
        showToast("Tôm vô lẹ");
    } 
    updatePrice();
    dIndex++;
    showDialogue();
}
