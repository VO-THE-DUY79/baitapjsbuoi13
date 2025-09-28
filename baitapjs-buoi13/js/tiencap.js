// tạo hàm hiện input số kết nối khi hình thức là doanh nghiệp
function hienKetNoi() {
    let loaiKH = document.getElementById("cap").value;
    let inputSoKn = document.getElementById("soKn");

    if (loaiKH === "doanh nghiệp") {
        // Hiện ô nhập số kết nối
        inputSoKn.classList.remove("hidden");
    } else {
        // Ẩn ô nhập số kết nối
        inputSoKn.classList.add("hidden");
    }
}
// lấy thông tin số kết nối
let getSoKetNoi = () => {
    let soKetNoi = document.getElementById("soKn").value * 1;
    return soKetNoi;
};

// lấy thông tin nhà dân hay doanh nghiệp
let getHinhThuc = () => {
    let hinhThuc = document.getElementById("cap").value;
    return hinhThuc;
};

// lấy thông tin số kênh cao cấp
let getKenh = () => {
    let Kenh = document.getElementById("kcc").value * 1;
    return Kenh;
};
// xây dựng hàm tính tiền cap
let tienCap = () => {
    let hinhThuc = getHinhThuc();
    let soKetNoi = getSoKetNoi();
    let Kenh = getKenh();

    let tienCap = 4.5 + 20.5 + 7.5 * Kenh;

    // xử lý khi là hình thức doanh nghiệp
    if (hinhThuc === "doanh nghiệp") {
        if (0 <= soKetNoi && soKetNoi <= 10) {
            tienCap = 15 + 75 + 50 * Kenh;
        } else if (soKetNoi > 10) {
            tienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * Kenh;
        }
    } else {
        console.log("");
    }
    // hiển thị ra UI cho hình thức nhà dân
    document.getElementById("tienCap").style.display = "block";
    document.getElementById("tienCap").innerHTML =
        tienCap.toLocaleString() + "USD";
};
