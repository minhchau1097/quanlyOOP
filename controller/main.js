import Customer from "../models/Customer.js";
import Student from "../models/Student.js";
import Employee from "../models/Employee.js";
import ListPersons from "../models/ListPerson.js";
import Validation from "../models/Validation.js";
import Api from "../services/api.js";
import { clearDetail, renderSelect, renderTable, showDetail, sortName } from "./controller.js"
export const domId = (id) => document.getElementById(id);
const listPerson = new ListPersons()


const api = new Api();
const validate = new Validation()


window.btnDelete = btnDelete;
window.btnUpdate = btnUpdate;

getLocal();


// const fetchProduct = () => {
//     let promise = api.callApi('foot', 'GET', null);
//     promise
//         .then(function (res) {
//             // layThongTin(res.data)
//             renderTable(res.data)
//         })
//         .catch(function () {

//         });
// };
// fetchProduct();

const getInfor = (add) => {
    let id = domId('id').value;
    let hoTen = domId('hoTen').value;
    let doiTuong = domId('doiTuong').value;
    let diaChi = domId('diaChi').value;
    let email = domId('email').value;
    let toan = domId('toan').value;
    let ly = domId('ly').value;
    let hoa = domId('hoa').value;
    let ngayLam = domId('ngayLam').value;
    let luongNgayLam = domId('luongNgayLam').value;
    let congTy = domId('congTy').value;
    let hoaDon = domId('hoaDon').value;
    let danhGia = domId('danhGia').value;

    let isValid = true;
    if (add) {

        isValid &= validate.checkId(id, 'invalidId', listPerson.arr, '(*)Mã đã tồn tại') && validate.checkLength(id, 'invalidId', '(*)Tối thiểu 6 ký tự', 6, 12)
    }
    isValid &= validate.checkWord(hoTen, 'invalidTen', "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", '(*)Tên phải là chữ, không để trống') && validate.checkLength(hoTen, 'invalidTen', '(*)Tối thiểu 6 ký tự', 6, 20)
    isValid &= validate.checkPerson('doiTuong', 'invalidDoiTuong', '(*)Vui lòng chọn đối tượng')
    isValid &= validate.checkLength(diaChi, 'invalidDiaChi', '(*)Tối thiểu 6 ký tự', 6, 50)
    isValid &= validate.checkWord(email, 'invalidEmail', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '(*)Email phải đúng định dạng, không để trống')




    if (doiTuong === 'loai1') {
        isValid &= validate.checkPoint(toan, 'invaliToan', '(*)Vui lòng nhập điểm hợp lệ', 0, 10)
        isValid &= validate.checkPoint(ly, 'invaliLy', '(*)Vui lòng nhập điểm hợp lệ', 0, 10)
        isValid &= validate.checkPoint(hoa, 'invaliHoa', '(*)Vui lòng nhập điểm hợp lệ', 0, 10)
        if (!isValid) return null
        const student = new Student(id, hoTen, diaChi, email, doiTuong, toan, ly, hoa)
        student.tinhDiem();
        return student;
    } else if (doiTuong === 'loai2') {
        isValid &= validate.checkLength(congTy, 'invalidCongTy', '(*)Tối thiểu 6 ký tự', 6, 50) && validate.checkWord(congTy, 'invalidCongTy', "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", '(*)Công ty phải là chữ, không để trống')
        isValid &= validate.checkLength(hoaDon, 'invalidHoaDon', '(*)Vui lòng nhập hoá đơn hợp lệ từ một triệu đồng trở lên', 7, 50)
        isValid &= validate.checkLength(danhGia, 'invalidDanhGia', '(*)Tối thiểu 6 ký tự', 6, 100) &&validate.checkWord(danhGia, 'invalidDanhGia', "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", '(*)Đánh giá phải là chữ, không để trống')
        if (!isValid) return null
        const customer = new Customer(id, hoTen, diaChi, email, doiTuong, congTy, hoaDon, danhGia)
        return customer;
    } else if (doiTuong === 'loai3') {

        isValid &= validate.checkLength(ngayLam, 'invalidNgayLam', '(*)Vui lòng nhập ngày làm', 1, 20) && validate.checkPoint(ngayLam, 'invalidNgayLam', '(*)Vui lòng nhập ngày làm hợp lệ', 1, 31)
        isValid &= validate.checkLength(luongNgayLam, 'invalidLuongNgayLam', '(*)Vui lòng nhập lương', 1, 20) && validate.checkPoint(luongNgayLam, 'invalidLuongNgayLam', '(*)Vui lòng nhập lương hợp lệ', 10000, 1000000)
        if (!isValid) return null
        const employee = new Employee(id, hoTen, diaChi, email, doiTuong, ngayLam, luongNgayLam)
        employee.tinhLuong();
        return employee;
    }




}
domId('filter').addEventListener('change', () => {
    let filter = domId('filter').value;
    let newArr = listPerson.findType(filter);

    renderTable(newArr);

});

domId('doiTuong').addEventListener('change', () => {
    let doiTuong = domId('doiTuong').value;
    renderSelect(doiTuong);

})

domId('btnThem').addEventListener('click', () => {
    domId('id').removeAttribute('disabled')
    domId('btnCapNhat').style.display = 'none'
    domId('btnThemDoiTuong').style.display = 'block'
    clearDetail();
    renderSelect();

})
domId('btnThemDoiTuong').addEventListener('click', () => {
    let person = getInfor(true);
    if (person) {
        listPerson.addPerson(person)

        renderTable(listPerson.arr)
        domId('filter').value = 'all';
        setLocal();
    }
    // listPerson.arr.forEach((person) => {
    //     api.callApi('foot', 'POST', person)
    //         .then(() => {
    //             fetchProduct();
    //         })
    // })



})
domId('btnCapNhat').addEventListener('click', () => {
    let person = getInfor(false);
    if (person) {
        listPerson.updatePerson(person)

        renderTable(listPerson.arr)
        setLocal();
        document.getElementsByClassName("close")[0].click();
    }
    //     listPerson.arr.forEach((person) => {
    //         api.callApi(`foot/${person.id}`, 'PUT', person)
    //             .then(() => {
    //                 fetchProduct();
    //             })

    //     })
    // })
})

domId('btnSort').addEventListener('click', () => {
    let type = domId('filter').value;
    let person = listPerson.findType(type);
    sortName(person);
})

function btnDelete(id) {
    // api.callApi(`foot/${id}`, 'DELETE', null)
    //     .then(() => {
    //         fetchProduct();
    //     })
    listPerson.deletePerson(id);
    renderTable(listPerson.arr)
    setLocal();
}

function btnUpdate(id) {
    clearDetail();
    domId('exampleModalLabel').innerHTML = 'Chỉnh sửa';
    domId('btnThemDoiTuong').style.display = 'none'
    domId('btnCapNhat').style.display = 'block'
    domId('id').setAttribute('disabled', 'disabled')

    // api.callApi('foot', 'GET', null)
    //     .then((res) => {
    //         showDetail(res.data, id)

    //     })
    let person = listPerson.findPerson(id);
    if (person) {
        showDetail(person)
    }
}
function setLocal() {
    //convert từ JSON sang string
    var dataString = JSON.stringify(listPerson.arr);

    localStorage.setItem('list', dataString);
}


function getLocal() {
    if (localStorage.getItem('list')) {


        var dataString = localStorage.getItem('list');

        listPerson.arr = JSON.parse(dataString);
        renderTable(listPerson.arr);
    }
}