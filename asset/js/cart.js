const panel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlayCart");
document.getElementById("openCart").onclick = openCart;
document.getElementById("closeCart").onclick = closeCart;
overlay.onclick = closeCart;

function openCart(){
  panel.style.right = "0";
  overlay.style.display = "block";
}

function closeCart(){
  panel.style.right = "-100%";
  overlay.style.display = "none";
}
