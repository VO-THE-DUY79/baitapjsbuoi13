// lấy thông tin thu nhập năm
let getThuNhapNam = () => {
    let ThuNhapNam = document.getElementById("ThuNhapNam").value * 1;
    return ThuNhapNam;
};

// lấy thông tin số người phụ thuộc
let getSoNguoiPhuThuoc = () => {
    let NguoiPhuThuoc = document.getElementById("NguoiPhuThuoc").value * 1;
    return NguoiPhuThuoc;
};

// tính
let thueThuNhap = () => {
    let ThuNhapNam = getThuNhapNam();
    let NguoiPhuThuoc = getSoNguoiPhuThuoc();
    let ThuNhapChiuThue = ThuNhapNam - 4000000 - NguoiPhuThuoc * 1600000;
    let tienThue = 0;
    //tính thuế theo mức thu nhập chịu thuế
    if (0 < ThuNhapChiuThue && ThuNhapChiuThue <= 60 * 10 ** 6) {
        tienThue = ThuNhapChiuThue * 0.05;
    } else if (
        60 * 10 ** 6 < ThuNhapChiuThue &&
        ThuNhapChiuThue <= 120 * 10 ** 6
    ) {
        tienThue = ThuNhapChiuThue * 0.1;
    } else if (
        120 * 10 ** 6 < ThuNhapChiuThue &&
        ThuNhapChiuThue <= 210 * 10 ** 6
    ) {
        tienThue = ThuNhapChiuThue * 0.15;
    } else if (
        210 * 10 ** 6 < ThuNhapChiuThue &&
        ThuNhapChiuThue <= 384 * 10 ** 6
    ) {
        tienThue = ThuNhapChiuThue * 0.2;
    } else if (
        384 * 10 ** 6 < ThuNhapChiuThue &&
        ThuNhapChiuThue <= 624 * 10 ** 6
    ) {
        tienThue = ThuNhapChiuThue * 0.25;
    } else if (
        624 * 10 ** 6 < ThuNhapChiuThue &&
        ThuNhapChiuThue <= 960 * 10 ** 6
    ) {
        tienThue = ThuNhapChiuThue * 0.3;
    } else if (960 * 10 ** 6 < ThuNhapChiuThue) {
        tienThue = ThuNhapChiuThue * 0.35;
    } else {
        console.log("");
    }
    // hiển thị ra UI
    document.getElementById("tt").style.display = "block";
    document.getElementById("tt").innerHTML =
        tienThue.toLocaleString() + " VND";
};
