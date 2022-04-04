class HoaDon extends Menu2 {
	constructor() {
		super();
		this.arrMonAn = this.arrMonAn.map((monAn) => {
			return {
				...monAn,
				soLuong: 0,
				thanhToan() {
					return this.giaTien * this.soLuong;
				},
			};
		});
	}
	renderMangMonAnHD(mangMonAn2) {
		let tongTien = mangMonAn2.reduce((arr, curr) => {
			return arr + curr.thanhToan();
		}, 0);
		let tongTienHtml = `
        <td></td>
        <td></td>
        <td class="font-weight-bold">Thành tiền</td>
        <td>${tongTien}</td>
        `;
		let html = "";
		for (let key in mangMonAn2) {
			html += `
            <tr>
            <td>${mangMonAn2[key].maMonAn}</td>
            <td>${mangMonAn2[key].tenMonAn}</td>
            <td>${mangMonAn2[key].soLuong}</td>
            <td>${mangMonAn2[key].thanhToan()}</td>
            
        </tr>
            `;
		}
		document.querySelector("#tblHoaDon").innerHTML = html;
		document.querySelector("#txtThanhTien").innerHTML = tongTienHtml;
	}
}
