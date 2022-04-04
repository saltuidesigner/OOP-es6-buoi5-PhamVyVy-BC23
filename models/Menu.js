class Menu {
	danhSachMonAn = [];
	constructor() {}
	luuLocalStorage(mangMonAn) {
		localStorage.setItem("danhSachMonAn", JSON.stringify(mangMonAn));
	}
	layDataTuLocalStorage() {
		if (JSON.parse(localStorage.getItem("danhSachMonAn"))) {
			this.danhSachMonAn = [
				...JSON.parse(localStorage.getItem("danhSachMonAn")),
			];
			return this.danhSachMonAn;
		}

		return [];
	}
	themMonAn(monAn) {
		this.danhSachMonAn.push(monAn);
		return this.danhSachMonAn;
	}
	xoaMonAn(maMonAn) {
		this.danhSachMonAn = this.danhSachMonAn.filter((mon) => {
			return mon.maMonAn !== maMonAn;
		});
		this.renderMonAn(this.danhSachMonAn);
		this.luuLocalStorage(this.danhSachMonAn);
	}
	renderMonAn(mangMonAn) {
		let html = "";
		for (let key in mangMonAn) {
			html += `
		<tr>
		<td>${mangMonAn[key].maMonAn}</td>
		<td>${mangMonAn[key].tenMonAn}</td>
		<td>${mangMonAn[key].giaTien}</td>
		<td><img style="width: 100px;height:100px;" src=${mangMonAn[key].linkAnh} /></td>
		<td><button onclick ='menu.xoaMonAn("${mangMonAn[key].maMonAn}")' class="btn btn-danger">Xoá</button></td>
	</tr>
		`;
		}
		document.querySelector(".baiTap1 .tblDanhMucMonAn").innerHTML = html;
	}
}
