class Menu2 {
	arrMonAn = [
		{ maMonAn: 1, tenMonAn: "Nước lẩu haidilao", giaTien: 100 },
		{ maMonAn: 2, tenMonAn: "Mì cay thành đô", giaTien: 200 },
		{ maMonAn: 3, tenMonAn: "Mực bạch ngọc", giaTien: 300 },
	];

	renderMangMonAn2 = function () {
		let html = "";
		for (var key in this.arrMonAn) {
			html += `
            <div class="row mt-3">
            <div class="col-3">${this.arrMonAn[key].maMonAn}</div>
            <div class="col-3">${this.arrMonAn[key].tenMonAn}</div>
            <div class="col-3">${this.arrMonAn[key].giaTien}</div>
            <div class="col-3">
                <button class="btn-themMotMonAn bg-danger text-white btn" data-mamonthem="${this.arrMonAn[key].maMonAn}">+</button>
                <button data-mamonxoa="${this.arrMonAn[key].maMonAn}" class="btn-xoaMotMonAn bg-danger text-white btn" >-</button>
            </div>
        </div>
            `;
		}
		document.querySelector(".baiTap2 .card-body").innerHTML += html;
	};
}
