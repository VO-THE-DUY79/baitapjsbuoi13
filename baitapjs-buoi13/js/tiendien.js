// lấy thông tin số kw người dùng nhập
const getSoKw = () => {
    let soKw = document.getElementById("kw").value * 1;
    return soKw;
};
// tính tổng tiền điện người dùng phải trả
let tinhTien = () => {
    // console.log("🚀 ~ tinhTien ~ tinhTien:", tinhTien);
    soKw = getSoKw();
    // console.log("🚀 ~ tinhTien ~ soKw:", soKw);

    let tongTien = 0;

    // thực hiện tính tiền bằng if else
    if (0 < soKw && soKw <= 50) {
        tongTien = soKw * 500;
        // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);
    } else if (50 < soKw && soKw <= 100) {
        tongTien = 50 * 500 + (soKw - 50) * 650;
        // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);
    } else if (100 < soKw && soKw <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
        // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);
    } else if (200 < soKw && soKw <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
        // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);
    } else if (350 < soKw) {
        tongTien =
            50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
        // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);
    } else {
        alert("mời bạn nhập lại");
    }
    // hiển thị kết quả ra UI
    document.getElementById("td").style.display = "block";
    document.getElementById("td").innerHTML = tongTien.toLocaleString() + "VND";
};
