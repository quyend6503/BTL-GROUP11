fetch("../layout/Layout.html")
  .then(res => res.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Lấy header
    document.getElementById("header").innerHTML =
      doc.getElementById("header").innerHTML;

    // Lấy footer
    document.getElementById("footer").innerHTML =
      doc.getElementById("footer").innerHTML;
  });