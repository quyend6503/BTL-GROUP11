
        // NGÀY MIN = HÔM NAY
        const today = new Date().toISOString().split("T")[0];
        document.getElementById("date").setAttribute("min", today);

        // NĂM PHẢI 4 SỐ
        document.getElementById("date").addEventListener("input", function () {
            let v = this.value;
            let year = v.split("-")[0];
            if (year.length > 4) {
                year = year.slice(0, 4);
                let m = v.split("-")[1] || "01";
                let d = v.split("-")[2] || "01";
                this.value = `${year}-${m}-${d}`;
            }
        });

       function goNextPage() {
    let p = document.getElementById("people").value;
    let d = document.getElementById("date").value;
    let t = document.getElementById("time").value;

    // ---- KIỂM TRA SỐ NGƯỜI ----
    if (p <= 0 || p > 30) {
        alert("Số người phải từ 1 đến 30");
        return;
    }

    // ---- LẤY NGÀY HÔM NAY (YYYY-MM-DD) ----
    const todayObj = new Date();
    const yearNow = todayObj.getFullYear();
    const month = String(todayObj.getMonth() + 1).padStart(2, "0");
    const day = String(todayObj.getDate()).padStart(2, "0");
    const today = `${yearNow}-${month}-${day}`;

    // ---- KIỂM TRA NGÀY ----
    if (!d) { alert("Hãy chọn ngày"); return; }
    if (d < today) { alert("Ngày không được nhỏ hơn hôm nay"); return; }

    // Giới hạn năm (năm nay → năm sau)
    const pickedYear = parseInt(d.split("-")[0]);
    if (pickedYear < yearNow || pickedYear > yearNow + 1) {
        alert(`Ngày phải nằm trong năm ${yearNow} hoặc ${yearNow + 1}`);
        return;
    }


    // ---- LƯU LOCALSTORAGE ----
    localStorage.setItem("people", p);
    localStorage.setItem("date", d);
    localStorage.setItem("time", t);

    window.location.href = "trang2.html";
}

