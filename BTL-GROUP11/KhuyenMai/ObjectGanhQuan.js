/*-------------------Khuyến mại dành cho dùng bữa tại nhà hàng*/
const KhuyenMai = [
    {
        id: '01',
        title: "🎁BỮA TỐI NOEL – 2 NGƯỜI",
        image: "../KhuyenMai/ImgKhuyenMai/noel.jpg",
        description: '<span class="highlight-deal">Deal Giáng Sinh</span>',
        content: `
                <li>Tặng 2 ly trà nóng mùa Giáng Sinh</li>
                <li>Ưu đãi còn <strong>299.000đ / 2 người</strong></li>
                <li>Chỉ áp dụng tối <strong>24 & 25/12</strong></li>
    `
    },
    {
        id: '02',
        title: "🎄 NOEL ẤM LÒNG - ĐONG ĐẤY ẤM ÁP",
        image: "../KhuyenMai/ImgKhuyenMai/che.jpg",
        description: '<span class="highlight-deal">Deal Giáng Sinh</span>',
        content: `
                <li>Giảm 20% hóa đơn cho bàn từ 2 người</li>
                <li>Tặng 01 món tráng miệng nhà làm</li>
                <li>Ưu đãi còn <strong>299.000đ / 2 người</strong></li>
                <li>Chỉ áp dụng tối <strong>24 & 25/12</strong></li>
                <li>Áp dụng tại quán - không cộng dồn khuyến mãi khác</li>
    `
    },
    {
        id: '03',
        title: "🍵 ẤM BỤNG ẤM LÒNG",
        image: "../KhuyenMai/ImgKhuyenMai/tra.jpg",
        description: '<span class="highlight-deal">Deal Quà nhỏ</span>',
        content: `
                <li>Tặng trà nóng cho mỗi bàn</li>
                <li>Ăn ngon – chuyện lâu – không vội về</li>
                <li>Áp dụng từ 17h–21h</li>
    `
    },
    {
        id: '04',
        title: "🍲MÂM CƠM NOEL",
        image: "../KhuyenMai/ImgKhuyenMai/nem.jpg",
        description: '<span class="highlight-deal">Deal Quà nhỏ</span>',
        content: `
                <li>Gà quay lá chanh, sườn nướng mật ong, canh nấm, xôi gấc</li>
                <li>Tặng kèm 1 bình trà gừng hoặc nước sâm thảo mộc</li>
                <li>Giá Noel chỉ <strong>599.000đ / 4 người</strong></li>
                <li>Áp dụng từ <strong>20/12 – 25/12</strong>, dùng bữa tại quán</li>
    `
    },
    {
        id: '05',
        title: "🥘 GÁNH QUÁN MỜI CƠM",
        image: "../KhuyenMai/ImgKhuyenMai/gaquay.jpg",
        description: '<span class="highlight-deal">Deal Giáng sinh</span>',
        content: `
                <li>Gà quay lá chanh, sườn nướng mật ong</li>
                <li>Tặng kèm 1 bình trà gừng hoặc nước sâm thảo mộc</li>
                <li>Giá Noel chỉ <strong>599.000đ / 4 người</strong></li>
                <li>Áp dụng từ <strong>20/12 – 25/12</strong>, dùng bữa tại quán</li>
    `
    },
];
export { KhuyenMai };

/*-------------------Ưu đãi dành cho giao hàng và nhận hàng*/
const uudai = [
    {
        id: '01',
        title: "ƯU ĐÃI GIỜ CƠM TRƯA",
        image: "../KhuyenMai/ImgKhuyenMai/bun.jpg",
        description: '',
        content: `
        <ul>
          <li>Đơn tối thiểu 100.000đ</li>
          <li>Hỗ trợ <strong>15.000đ</strong> phí vận chuyển cho cơm trưa</li>
          <li>Áp dụng từ <strong> 11:00 – 13:00, Thứ 2 – Thứ 6</strong></li>
        </ul>
    `
    },
    {
        id: '02',
        title: "QUÀ NHỎ THEO ĐƠN",
        image: "../KhuyenMai/ImgKhuyenMai/nuoc.jpg",
        description: '',
        content: `
           <ul>
           <li>Đơn tối thiểu 100.000đ</li>
          <li>Tặng món ăn kèm/ nước</li>
          <li>Áp dụng số lượng có hạn mỗi ngày</li>
        </ul>
    `
    },
    {
        id: '03',
        title: "ĐẶT CÀNG NHIỀU, DEAL CÀNG LỜI",
        image: "../KhuyenMai/ImgKhuyenMai/giadinh.jpg",
        description: '',
        content: `
        <ul>
          <li>Đơn tối thiểu 500.000đ</li>
          <li>Giảm trực tiếp <strong>100.000đ</strong></li>
          <li>Áp dụng từ <strong>20/12 – 25/12</strong>, cho cho các đơn giao hàng</li>
        </ul>
    `
    },
    ];
export {uudai };

const Secret = [
  {
    id: '01',
    title: "🎁 Giáng Sinh Bí Mật",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "XMAS50",
    description: "",
    content: `
        Giảm 50% cho đơn hàng trên 500.000đ
    `
  },
  {
    id: '02',
    title: "🎄 Deal Noel",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "NOEL20",
    description: "Click để mở hộp và nhận mã!",
    content: `
        Giảm 15% cho hóa đơn trên 5 người
    `
  },
  {
    id: '03',
    title: "🎄 Deal Noel",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "NOEL20",
    description: "Click để mở hộp và nhận mã!",
    content: `
        Giảm 20% phí ship
    `
  },
    {
    id: '04',
    title: "🎄 Deal Noel",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "NOEL20",
    description: "Click để mở hộp và nhận mã!",
    content: `
        Giảm 20% cho mọi món ăn
    `
  },  
];
export {Secret};