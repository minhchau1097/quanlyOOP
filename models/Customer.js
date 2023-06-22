import Person from "./Person.js";

export default class Customer extends Person {
    constructor(id, name, address, email, doiTuong, congTy, hoaDon, danhGia) {
        super(id, name, address, email, doiTuong);
        this.congTy = congTy;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;

    }

}