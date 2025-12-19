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
