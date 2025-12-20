let currentTotalPrice = 0;
let currentOptionName = "";

let dIndex = 0;
let typingTimer;
const typingSpeed = 35;
let dialogues = [];     // dữ liệu hội thoại của món ăn
// ===============  HÀM MỞ MÓN TỪ INDEX  ==================
function openDish(url, basePrice, dialogramID, dishKey) {

    // 🔥 LẤY ẢNH THEO MÓN
    dishImages = dishImagesMap[dishKey] || [];
    imgIndex = 0;

    fetch(url)
        .then(res => res.text())
        .then(html => {

            // Gắn HTML popup vào trang
            document.getElementById("popup-container").innerHTML = html;

            // 🔥 Gán giá gốc cho món hiện tại
            document.body.dataset.price = basePrice;

            // 🔥 Gán hội thoại theo món
            dialogues = dialogueData[dialogramID] || [];

            // Kích hoạt lại toàn bộ script trong popup
            const scripts = document
                .getElementById("popup-container")
                .querySelectorAll("script");

            scripts.forEach(oldScript => {
                const newScript = document.createElement("script");
                if (oldScript.src) newScript.src = oldScript.src;
                else newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript);
            });

            // Chờ popup load rồi kích hoạt radio + tính giá
            setTimeout(() => {

                // 🔥 HIỂN THỊ ẢNH ĐẦU TIÊN
                updateImage();

                document.querySelectorAll('input[name="option"]').forEach(r => {
                    r.addEventListener("change", updatePrice);
                });

                updatePrice(); // tính giá ngay lập tức
                openPopup();   // mở popup

            }, 100);
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


// Ảnh hiện tại
let dishImages = [];
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

    currentOptionName = selectedOption ? selectedOption.dataset.name : "";

    currentTotalPrice = basePrice + extra;

    if (document.getElementById('totalPrice')) {
        document.getElementById('totalPrice').textContent =
            currentTotalPrice.toLocaleString('vi-VN') + 'đ';
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
    }else if (choice === "Không cần thêm") {
        document.querySelector('input[value="0"]').checked = true;
    }  else if (choice === "Thêm tôm (+50k)") {
        document.querySelector('input[value="50000"]').checked = true;
        showToast("Tôm vô lẹ");
    } else if (choice === "Nửa con") {
        document.querySelector('input[value="0"]').checked = true;
    } else if (choice === "Nguyên con (+180k)") {
        document.querySelector('input[value="180000"]').checked = true;
        showToast("Gà nguyên con sẽ được chuẩn bị");
    } else if (choice === "Thêm thịt (+50k)") {
        document.querySelector('input[value="50000"]').checked = true;
        showToast("Extra thịt tới ");
    }else if (choice === "Thêm dưa (+10k)") {
        document.querySelector('input[value="10000"]').checked = true;
        showToast("Extra dưa tới ");
    }else if (choice === "Thêm gà (+50k)") {
        document.querySelector('input[value="50000"]').checked = true;
        showToast("Extra gà vip ");
    }else if (choice === "Thêm trứng (+10k)") {
        document.querySelector('input[value="10000"]').checked = true;
        showToast("Thêm eggs ");
    }else if (choice === "Thêm pate (+15k)") {
        document.querySelector('input[value="15000"]').checked = true;
        showToast("Pa cute ");
    }else if (choice === "Thêm thịt (+50K)") {
        document.querySelector('input[value="50000"]').checked = true;
        showToast("Meat dì li ci ợt ");
    }else if (choice === "Không thêm") {
        document.querySelector('input[value="0"]').checked = true;
        showToast("Không thêm hự ");
    }else if (choice === "Sốt kem hành (+15k)") {
        document.querySelector('input[data-name="Sốt kem hành (+15k)"]').checked = true;
        showToast("Kem hành ngon lúm");
    }else if (choice === "Sốt mù tạt (+15k)") {
        document.querySelector('input[data-name="Sốt mù tạt (+15k)"]').checked = true;
        showToast("Mù tạt thơm");
    }else if (choice === "Sốt cay (+15k)") {
        document.querySelector('input[data-name="Sốt cay (+15k)"]').checked = true;
        showToast("Cay vãi");
    }else if (choice === "Thêm rau mùi"){
        document.querySelector('input[data-name="Thêm rau mùi"]').checked = true;
        showToast("Ngonnn");
    }else if (choice === "Sốt BBQ"){
        document.querySelector('input[data-name="Sốt BBQ"]').checked = true;
        showToast("mlem mlem");
    }else if (choice === "Sốt mật ong"){
        document.querySelector('input[data-name="Sốt mật ong"]').checked = true;
        showToast("best option");
    }else if (choice === "Suất lớn (+50k)"){
        document.querySelector('input[data-name="Suất lớn (+50k)"]').checked = true;
        showToast("No đét");
    }else if (choice === "Tôm sú"){
        document.querySelector('input[data-name="Tôm sú"]').checked = true;
        showToast("Cũng okee");
    }else if (choice === "Tôm Hùm (+1tr)"){
        document.querySelector('input[data-name="Tôm hùm (+1tr)"]').checked = true;
        showToast("Đẳng cấp vippro luxury");
    }
    updatePrice();
    dIndex++;
    showDialogue();
}

