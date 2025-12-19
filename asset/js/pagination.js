document.addEventListener("DOMContentLoaded", () => {

    // LẤY TẤT CẢ ITEM (các card-item)
    const products = Array.from(document.querySelectorAll(".card-item"))
                          .map(card => card.parentNode); // lấy luôn thẻ col chứa nó

    // CONTAINER LÀ THẺ ROW
    const container = document.querySelector(".left-wrapper .row");

    const pagination = document.getElementById("pagination");

    let itemsPerPage = 9;
    let currentPage = 1;

    function renderPage() {
        container.innerHTML = "";

        let start = (currentPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;

        let pageItems = products.slice(start, end);

        pageItems.forEach(item => container.appendChild(item));

        renderPagination();
    }

    function renderPagination() {
        pagination.innerHTML = "";

        let totalPages = Math.ceil(products.length / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            let btn = document.createElement("button");
            btn.innerText = i;

            if (i === currentPage) btn.classList.add("active");

            btn.onclick = () => {
                currentPage = i;
                renderPage();
                window.scrollTo({ top: 0, behavior: "smooth" });
            };

            pagination.appendChild(btn);
        }
    }

    renderPage();
});
