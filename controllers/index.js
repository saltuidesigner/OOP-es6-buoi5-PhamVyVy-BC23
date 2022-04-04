//Bai1

let menu = new Menu();
let danhSachMonAn = menu.layDataTuLocalStorage();
menu.renderMonAn(danhSachMonAn);
document.querySelector(".btn-themMonAn").onclick = function () {
	let monAn = new MonAn();
	let inputMonAnArr = document.querySelectorAll(".baiTap1 input");
	for (let input of inputMonAnArr) {
		let { id, value } = input;
		monAn[id] = value;
	}
	menu.themMonAn(monAn);
	menu.luuLocalStorage(danhSachMonAn);
	menu.renderMonAn(danhSachMonAn);
};

//Bai2
let menu2 = new Menu2();
let danhSachMonAn2 = menu2.arrMonAn;

//Từ mảng món ăn viết hàm tạo giao diện cho menu
menu2.renderMangMonAn2();

let bill = new HoaDon();

function handleThayDoiSLMonAn(maMon, type) {
	let mangMonAn2 = [];
	if (type == "them") {
		bill.arrMonAn = bill.arrMonAn.map((mon) => {
			if (mon.maMonAn == maMon) {
				mon = {
					...mon,
					soLuong: mon.soLuong + 1,
				};
			}
			return mon;
		});
	} else {
		bill.arrMonAn = bill.arrMonAn.map((mon) => {
			if (mon.maMonAn == maMon) {
				if (mon.soLuong > 0) {
					mon = {
						...mon,
						soLuong: mon.soLuong - 1,
					};
				}
			}
			return mon;
		});
	}
	bill.arrMonAn.forEach((mon) => {
		if (mon.soLuong != 0) {
			mangMonAn2.push(mon);
		}
	});
	bill.renderMangMonAnHD(mangMonAn2);
}

document.querySelector("body").onclick = function (e) {
	if (e.target.matches(".btn-themMotMonAn")) {
		e.target.onclick = handleThayDoiSLMonAn(e.target.dataset.mamonthem, "them");
	} else if (e.target.matches(".btn-xoaMotMonAn")) {
		e.target.onclick = handleThayDoiSLMonAn(e.target.dataset.mamonxoa, "xoa");
	}
};
