 document.getElementById("selectedTable").classList.add("active");
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
  includeHTML("header", "../layout/header.html");
  includeHTML("footer", "../layout/footer.html");
});



// =================== TOGGLE MENU (NẾU CÒN DÙNG) ===================
function toggleMenu() {
  const nav = document.querySelector(".nav");
  if (nav) nav.classList.toggle("active");
}


 // LẤY DỮ LIỆU TỪ TEST 1
    document.getElementById("showPeople").innerText = localStorage.getItem("people") || "--";
    document.getElementById("showDate").innerText   = localStorage.getItem("date") || "--";
    document.getElementById("showTime").innerText   = localStorage.getItem("time") || "--";
/* SUBMIT */
function submitBooking() {
    let name = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let table = document.getElementById("selectedTable").innerText;
    let people = localStorage.getItem("people");
    let date = localStorage.getItem("date");
    let time = localStorage.getItem("time");
// RÀNG BUỘC HỌ TÊN
    const nameRegex = /^[A-Za-zÀ-ỹ\s]{2,}$/;
    if (!nameRegex.test(name)) {
        alert("❌ Họ tên không hợp lệ!\n• Không chứa số hoặc ký tự đặc biệt\n• Tối thiểu 2 ký tự");
        return;
    }

    // RÀNG BUỘC SỐ ĐIỆN THOẠI
    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("❌ Số điện thoại không hợp lệ!\n• Phải gồm 10 số\n• Bắt đầu bằng số 0");
        return;
    }

    // RÀNG BUỘC EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("❌ Email không đúng định dạng!");
        return;
    }

    // CHƯA CHỌN BÀN
    if (table === "Chưa chọn") {
        alert("❌ Bạn chưa chọn bàn!");
        return;
    }

    if (!name || !phone || !email) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (table === "Chưa chọn") {
        alert("Bạn chưa chọn bàn!");
        return;
    }

    // THÔNG BÁO HOÀN TẤT
    alert(
        "🎉 ĐẶT BÀN THÀNH CÔNG!\n\n" +
        "• Họ tên: " + name + "\n" +
        "• Số điện thoại: " + phone + "\n" +
        "• Email: " + email + "\n" +
        "• Số người: " + people + "\n" +
        "• Ngày: " + date + "\n" +
        "• Giờ: " + time + "\n" +
        "• Bàn: " + table + "\n\n" +
        "Cảm ơn bạn đã đặt bàn tại Gánh Quán!"
    );
}
const ORIGINAL_IMAGE = document.getElementById("floorImg").src;
let isZooming = false;

function zoomToSpot(e, hotspot, tableName, imageAfter) {
    e.stopPropagation();
    if (isZooming) return;
    isZooming = true;

    const img = document.getElementById("floorImg");
    const box = document.getElementById("tableBox");
    const boxRect = box.getBoundingClientRect();
    const hsRect = hotspot.getBoundingClientRect();

    hideAllHotspots();
    document.getElementById("selectedTable").innerText = tableName;

    const hsX = hsRect.left - boxRect.left + hsRect.width / 2;
    const hsY = hsRect.top - boxRect.top + hsRect.height / 2;

    /* ===== ZOOM VÀO ===== */
    img.style.transition = "transform 0.6s ease";
    img.style.transformOrigin = `${hsX}px ${hsY}px`;
    img.style.transform = "scale(3.5)";

    // 🔹 KHÔNG CÓ ẢNH → CHỈ ZOOM
    if (!imageAfter) {
        setTimeout(() => isZooming = false, 600);
        return;
    }

    /* ===== 2/3 THỜI GIAN → ĐỔI ẢNH ===== */
setTimeout(() => {

    const tempImg = new Image();
    tempImg.src = imageAfter;

    tempImg.onload = () => {

        // đổi ảnh khi đã load xong
        img.style.transition = "none";
        img.src = imageAfter;

        img.style.transformOrigin = "center";
        img.style.transform = "scale(2.5)";
        img.offsetHeight;

        /* ZOOM NHỎ DẦN */
        img.style.transition = "transform 0.8s ease";
        img.style.transform = "scale(1)";

        img.addEventListener("transitionend", function done(ev) {
            if (ev.propertyName !== "transform") return;
            img.removeEventListener("transitionend", done);
            isZooming = false;
        });
    };

}, 500);

}




function hideAllHotspots() {
    document.querySelectorAll(".hotspot").forEach(hs => {
        hs.classList.add("hidden");
    });
}



/* CLICK ẢNH → THOÁT ZOOM */
function resetZoom() {
    const img = document.getElementById("floorImg");

    // reset zoom
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center";

    // reset ảnh
    img.src = ORIGINAL_IMAGE;

    // hiện lại hotspot
    document.querySelectorAll(".hotspot").forEach(hs => {
        hs.classList.remove("hidden");
    });
}
