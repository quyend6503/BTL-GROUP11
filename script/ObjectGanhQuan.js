/*-------------------Khuyến mại dành cho dùng bữa tại nhà hàng*/
const KhuyenMai = [
    {
        id: '01',
        title: "🎁BỮA TỐI NOEL – 2 NGƯỜI",
        image: "./ImgKhuyenMai/noel.jpg",
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
        image: "./ImgKhuyenMai/che.jpg",
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
        image: "./ImgKhuyenMai/tra.jpg",
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
        image: "./ImgKhuyenMai/nem.jpg",
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
        image: "./ImgKhuyenMai/gaquay.jpg",
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
        image: "./ImgKhuyenMai/bun.jpg",
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
        image: "./ImgKhuyenMai/nuoc.jpg",
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
        image: "./ImgKhuyenMai/giadinh.jpg",
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
    title: "Giảm 10%",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "GANHQUAN2025<br>Giảm giá đơn hàng 10%",
    description: "",
    content: `
        Giảm giá đơn hàng 10%
    `
  },
  {
    id: '02',
    title: "Tặng bạn 50k",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "HELLO50<br>Tặng bạn 50k",
    description: "Click để mở hộp và nhận mã!",
    content: `
        Giảm 50k
    `
  },
  {
    id: '03',
    title: "FREESHIP 30k",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "FREESHIP<br>Giảm 30k phí ship",
    description: "Click để mở hộp và nhận mã!",
    content: `
        Giảm 30k phí ship
    `
  },
    {
    id: '04',
    title: "",
    image: "../KhuyenMai/ImgKhuyenMai/box.png",
    code: "Chúc bạn may mắn lần sau!<br>&#10084&#10084&#10084",
    description: "Click để mở hộp và nhận mã!",
    content: `
        
    `
  },  
];
export {Secret};

