import Person from "./Person.js";
export default class Student extends Person {
    constructor(id, name, address, email, doiTuong, toan, ly, hoa) {
        super(id, name, address, email, doiTuong);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.DTB = 0;
    }
    tinhDiem() {
        this.DTB = (Number(this.toan) + Number(this.ly)+Number(this.hoa)) / 3;
    }
}