// lấy thông tin điểm chuẩn
let getDiemChuan = () => {
    let DiemChuan = parseFloat(document.getElementById("diemChuan").value * 1);
    return DiemChuan;
};
// lấy thông tin khu vực ưu tiên
let getKhuVuc = () => {
    let KhuVuc = document.getElementById("khuVuc").value;
    return KhuVuc;
};
// lấy thông tin đối tượng ưu tiên
let getDoiTuong = () => {
    let DoiTuong = parseInt(document.getElementById("doiTuong").value * 1);
    return DoiTuong;
};
// lấy điểm môn thứ nhất
let getMon1 = () => {
    let Mon1 = parseInt(document.getElementById("mon1").value * 1);
    return Mon1;
};
// lấy điểm môn thứ 2
let getMon2 = () => {
    let Mon2 = parseInt(document.getElementById("mon2").value * 1);
    return Mon2;
};
// lấy điểm môn thứ 3
let getMon3 = () => {
    let Mon3 = parseInt(document.getElementById("mon3").value * 1);
    return Mon3;
};

// thiết lập hàm tổng để tính
let tongDiem = () => {
    let DiemChuan = getDiemChuan();
    let KhuVuc = getKhuVuc();
    let DoiTuong = getDoiTuong();
    let Mon1 = getMon1();
    let Mon2 = getMon2();
    let Mon3 = getMon3();
    let diemTong = 0;
    // Xác định điểm ưu tiên theo khu vực (if...else)
    let uuTienKV = 0;
    if (KhuVuc === "A") {
        uuTienKV = 2;
    } else if (KhuVuc === "B") {
        uuTienKV = 1;
    } else if (KhuVuc === "C") {
        uuTienKV = 0.5;
    } else {
        uuTienKV = 0; // Không thuộc khu vực ưu tiên
    }

    // Xác định điểm ưu tiên theo đối tượng (if...else)
    let uuTienDT = 0;
    if (DoiTuong === 1) {
        uuTienDT = 2.5;
    } else if (DoiTuong === 2) {
        uuTienDT = 1.5;
    } else if (DoiTuong === 3) {
        uuTienDT = 1;
    } else {
        uuTienDT = 0; // Không thuộc đối tượng ưu tiên
    }
    // Tính tổng điểm
    diemTong = Mon1 + Mon2 + Mon3 + uuTienKV + uuTienDT;
    // Nếu có môn 0 điểm → rớt
    if (Mon1 === 0 || Mon2 === 0 || Mon3 === 0) {
        document.getElementById("kq").style.display = "block";
        document.getElementById("kq").innerHTML = ` rớt do có môn 0 điểm.
                           Tổng điểm (chưa ưu tiên): ${(
                               Mon1 +
                               Mon2 +
                               Mon3
                           ).toFixed(2)}`;
        return;
    }

    // Kết quả
    if (diemTong >= DiemChuan) {
        document.getElementById("kq").style.display = "block";
        document.getElementById("kq").innerHTML = ` Thí sinh ĐẬU.
                           Tổng điểm: ${diemTong.toFixed(
                               2
                           )} (đã bao gồm ưu tiên)`;
    } else {
        document.getElementById("kq").style.display = "block";
        document.getElementById("kq").innerHTML = ` Thí sinh RỚT.
                           Tổng điểm: ${diemTong.toFixed(
                               2
                           )} (đã bao gồm ưu tiên)`;
    }
};
