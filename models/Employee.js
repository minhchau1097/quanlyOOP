import Person from "./Person.js";
export default class Employee extends Person {
    constructor(id, name, address, email, doiTuong, soNgayLam, luongTheoNgay) {
        super(id, name, address, email, doiTuong);
        this.soNgayLam = soNgayLam;
        this.luongTheoNgay = luongTheoNgay;
        this.luong = 0;
    }
    tinhLuong() {
        this.luong = Number( this.soNgayLam * this.luongTheoNgay);
    }
}