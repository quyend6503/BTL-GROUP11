  // Hàm load file HTML vào 1 thẻ
  function loadHTML(id, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('Không tải được file: ' + file);
        return response.text();
      })
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => console.error(err));
  }

  // Load header và footer
  loadHTML('header', '../layout/Header.html');
  loadHTML('footer', '../layout/Footer.html');