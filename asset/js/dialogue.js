// Tạo object chứa toàn bộ hội thoại của tất cả món ăn
const dialogueData = {};


dialogueData.mon1 = [
    { text: "Xin chào quý khách! Đây là món gà nướng sa tế của chúng tôi.", choices: null },
    { text: "Thành phần chính của món gồm có : Thịt gà và sốt sa tế .", choices: null },
    { text: "Anh/chị muốn dùng gà nửa con hay nguyên con ?", choices: ["Nguyên con (+180k)", "Nửa con"] },
    { text: "Cảm ơn quý khách!", choices: null }
];

dialogueData.mon2 = [
    { text: "Xin chào! Đây là món thịt quay giòn bì nổi tiếng của nhà hàng.", choices: null },
    { text: "Thành phần chính của món gồm có : thịt quay ăn cùng với dưa muối ", choices: null },
    { text: "Anh/chị muốn dùng kèm thêm gì không?", choices: ["Thêm thịt (+50k)", "Thêm dưa (+10k)" ,"Không cần thêm"] },
    { text: "Cảm ơn anh/chị, đã thưởng thức thịt quay giòn bì!", choices: null }
];

dialogueData.mon3 = [
    { text: "Xin chào quý khách! Đây là món gà rang gừng.", choices: null },
    { text: "Thịt gà được tẩm ướp với sả, gừng, tiêu và nước mắm .", choices: null },
    { text: "Anh/chị muốn ăn kèm gì ạ?", choices: ["Thêm gà (+50k)", "Không cần thêm"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];

dialogueData.mon4 = [
    { text: "Xin chào quý khách! Đây là bò né .", choices: null },
    { text: "Thịt bò được ăn cùng trứng và pate trên chảo gang", choices: null },
    { text: "Anh/chị muốn ăn kèm gì ạ?", choices: ["Thêm trứng (+10k)","Thêm pate (+15k)","Thêm thịt (+50K)","Không thêm"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];

dialogueData.mon5 = [
    { text: "Xin chào quý khách! Đây là cải thìa xào nấm .", choices: null },
    { text: "Rau cải thìa xào chung với nấm đông cô và xì dầu đặc trưng", choices: null },
    { text: "Anh/chị muốn ăn kèm gì ạ?", choices: ["Thêm nấm (+10k)","Thêm rau (+15k)","Không thêm"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];

dialogueData.mon6 = [
    { text: "Xin chào quý khách! This is fryed chiken .", choices: null },
    { text: "Gà rán giòn rụm , được chiên 2 lần nhom nhom", choices: null },
    { text: "Bro muốn ăn kèm gì ạ?", choices: ["Sốt kem hành (+15k)","Sốt mù tạt (+15k)","Sốt cay (+15k)","Không thêm"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];

dialogueData.mon7 = [
    { text: "Xin chào! Đây là gà trộn chuẩn vị.", choices: null },
    { text: "Gà trộn với rau mùi cùng với mắm, sốt chua ăn ", choices: null },
    { text: "Anh/chị muốn thêm gì không?", choices: ["Thêm rau mùi","Không thêm"] },
    { text: "Cảm ơn anh/chị đã thưởng thức món gà trộn!", choices: null }
];

dialogueData.mon8 = [
    { text: "Xin chào! Đây là sườn heo nướng truyền thống.", choices: null },
    { text: "Sườn được nướng kĩ , mềm mọng chín tới ", choices: null },
    { text: "Anh/chị muốn chọn loại sốt nào?", choices: ["Sốt mật ong", "Sốt BBQ"] },
    { text: "Chúc quý khách có bữa ăn ngon miệng!", choices: null }
];

dialogueData.mon9 = [
    { text: "Xin chào! Đây là món bò nướng lá lốt hấp dẫn.", choices: null },
    { text: "Lá lốt bọc ngoài nhân thít bên trong tạo nên hương vị hài hòa.", choices: null },
    { text: "Anh/chị muốn dùng suất lớn không?", choices: ["Không thêm","Suất lớn (+50k)"] },
    { text: "Cảm ơn quý khách!", choices: null }
];

dialogueData.mon10 = [
    { text: "Xin chào! Đây là món bò lúc lắc nổi tiếng.", choices: null },
    { text: "Bò xào với ớt chuông ,nêm nếm gia vị hoàn hảo.", choices: null },
    { text: "Anh/chị thích phần nào?", choices: ["Không thêm","Suất lớn (+50k)"] },
    { text: "Cảm ơn anh/chị đã chọn món!", choices: null }
];

dialogueData.mon11 = [
    { text: "Xin chào quý khách! Đây là món gà luộc chuẩn vị.", choices: null },
    { text: "Gà luộc được nấu từ sả, lá chanh và ớt tươi.", choices: null },
    { text: "Anh/chị muốn thêm topping?", choices: [ "Không thêm","Nguyên con (+180k)"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];

dialogueData.mon12 = [
    { text: "Xin chào quý khách! Đây là tôm chiên trứng muối.", choices: null },
    { text: "Tôm được chiên vàng giòn đảo cùng với sốt trứng muối ngậy béo", choices: null },
    { text: "Anh/chị muốn thay bằng tôm hùm không ?", choices: [ "Tôm sú","Tôm Hùm (+1tr)"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];

dialogueData.mon13 = [
    { text: "Xin chào quý khách! Đây là tôm hấp dừa.", choices: null },
    { text: "Tôm được hấp cùng nước dừa mọng béo", choices: null },
    { text: "Anh/chị muốn thay bằng tôm hùm không ?", choices: [ "Tôm sú","Tôm Hùm (+1tr)"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];
dialogueData.mon14 = [
    { text: "Xin chào quý khách! Đây là rau muống xào tỏi đặc trưng", choices: null },
    { text: "Rau muống xào cùng với tỏi thơm lừng", choices: null },
    { text: "Anh/chị muốn thêm rau không ?", choices: [ "Không thêm","Thêm rau (+15k)"] },
    { text: "Chúc quý khách ngon miệng!", choices: null }
];
const dishImagesMap = {
    mon1: [
        "../../img/menu-detail/ganuongsate1.jpeg",
        "../../img/menu-detail/ganuongsate2.jpeg",
        "../../img/menu-detail/ganuongsate3.jpeg"
    ],

    mon2: [
        "../../img/menu-detail/thitheoquaygionbi1.jpeg",
        "../../img/menu-detail/thitheoquaygionbi2.jpeg",
        "../../img/menu-detail/thitheoquaygionbi3.jpeg"
    ],

    mon3: [
        "../../img/menu-detail/garanggung1.jpeg",
        "../../img/menu-detail/garanggung2.jpeg",
        "../../img/menu-detail/garanggung3.jpeg"
    ],

    mon4: [
        "../../img/menu-detail/Bone1.jpeg",
        "../../img/menu-detail/Bone2.jpeg",
        "../../img/menu-detail/Bone3.jpeg"
    ],

    mon5: [
        "../../img/menu-detail/caithia1.jpeg",
        "../../img/menu-detail/caithia2.jpeg",
        "../../img/menu-detail/caithia3.jpeg"
    ],

    mon6: [
        "../../img/menu-detail/garan1.jpeg",
        "../../img/menu-detail/garan2.jpeg",
        "../../img/menu-detail/garan3.jpeg"
    ],

    mon7: [
        "../../img/menu-detail/gatron1.jpeg",
        "../../img/menu-detail/gatron2.jpeg",
        "../../img/menu-detail/gatron3.jpeg"
    ],

    mon8: [
        "../../img/menu-detail/suonheonuong1.jpeg",
        "../../img/menu-detail/suonheonuong2.jpeg",
        "../../img/menu-detail/suonheonuong3.jpeg"
    ],
    mon9: [
        "../../img/menu-detail/bolalot1.jpeg",
        "../../img/menu-detail/bolalot2.jpeg",
        "../../img/menu-detail/bolalot3.jpeg"
    ], 
    mon10: [
        "../../img/menu-detail/boluclac1.jpeg",
        "../../img/menu-detail/boluclac2.jpeg",
        "../../img/menu-detail/boluclac3.jpeg"
    ],
    mon11: [
        "../../img/menu-detail/galuoc1.jpeg",
        "../../img/menu-detail/galuoc2.jpeg",
        "../../img/menu-detail/galuoc3.jpeg"
    ],
    mon12: [
        "../../img/menu-detail/tomsot1.jpeg",
        "../../img/menu-detail/tomsot2.jpeg",
        "../../img/menu-detail/tomsot3.jpeg"
    ],
    mon13: [
        "../../img/menu-detail/tomluoc1.jpeg",
        "../../img/menu-detail/tomluoc2.jpeg",
        "../../img/menu-detail/tomluoc3.jpeg"
    ],
    mon14: [
        "../../img/menu-detail/raumuong1.jpeg",
        "../../img/menu-detail/raumuong2.jpeg",
        "../../img/menu-detail/raumuong3.jpeg"
    ],

    
};



