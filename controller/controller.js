import { domId } from "./main.js"
export const currency = (value) => {
    var transform = new Intl.NumberFormat('vn-VN');
    return transform.format(value);

}
export const renderSelect = (doiTuong) => {
    if (doiTuong === 'loai1') {
        classList('divToan').remove('d-none')
        classList('divLy').remove('d-none')
        classList('divHoa').remove('d-none')

        classList('divNgayLam').add('d-none')
        classList('divLuong').add('d-none')

        classList('divCongTy').add('d-none')
        classList('divHoaDon').add('d-none')
        classList('divDanhGia').add('d-none')

    } else if (doiTuong === 'loai2') {
        classList('divCongTy').remove('d-none')
        classList('divHoaDon').remove('d-none')
        classList('divDanhGia').remove('d-none')

        classList('divToan').add('d-none')
        classList('divLy').add('d-none')
        classList('divHoa').add('d-none')

        classList('divNgayLam').add('d-none')
        classList('divLuong').add('d-none')
    } else if (doiTuong === 'loai3') {
        classList('divNgayLam').remove('d-none')
        classList('divLuong').remove('d-none')

        classList('divToan').add('d-none')
        classList('divLy').add('d-none')
        classList('divHoa').add('d-none')

        classList('divCongTy').add('d-none')
        classList('divHoaDon').add('d-none')
        classList('divDanhGia').add('d-none')
    } else {
        classList('divNgayLam').add('d-none')
        classList('divLuong').add('d-none')

        classList('divToan').add('d-none')
        classList('divLy').add('d-none')
        classList('divHoa').add('d-none')

        classList('divCongTy').add('d-none')
        classList('divHoaDon').add('d-none')
        classList('divDanhGia').add('d-none')
    }
}

const classList = (id) => {
    return document.getElementById(id).classList;
}

export const renderTable = (arr) => {
    let content = '';
    arr.forEach(person => {
        if (person.doiTuong === 'loai1') {
            content += `
            <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.address}</td>
            <td>${person.email}</td>
            <td>Sinh Viên</td>
            <td>${person.DTB}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <button class='btn btn-danger' onclick='btnDelete("${person.id}")'>Delete</button>
                <button class='btn btn-danger' data-toggle="modal"
                data-target="#exampleModal" onclick='btnUpdate("${person.id}")'>Update</button>
            </td>
            </tr>
            `
        } else if (person.doiTuong === 'loai2') {
            content += `
            <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.address}</td>
            <td>${person.email}</td>
            <td>Khách Hàng</td>
            <td></td>
            <td></td>
            <td>${person.congTy}</td>
            <td>${currency(person.hoaDon)}đ</td>
            <td>${person.danhGia}</td>
            <td>
                <button class='btn btn-danger' onclick='btnDelete("${person.id}")'>Delete</button>
                <button class='btn btn-danger' data-toggle="modal"
                data-target="#exampleModal" onclick='btnUpdate("${person.id}")'>Update</button>
            </td>
            </tr>
            `
        } else if (person.doiTuong === 'loai3') {
            content += `
            <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.address}</td>
            <td>${person.email}</td>
            <td>Giảng Viên</td>
            <td></td>
            <td>${currency(person.luong)}đ</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <button class='btn btn-danger' onclick='btnDelete("${person.id}")'>Delete</button>
                <button class='btn btn-danger' data-toggle="modal"
                data-target="#exampleModal" onclick='btnUpdate("${person.id}")'>Update</button>
            </td>
            </tr>
            `
        }

    });
    domId('tbodyList').innerHTML = content;
}

export const sortName = (arr) => {
    if (arr.length !== undefined ){

        let newArr = arr.sort((nextProduct, product) => {
            let name = product.name.toLowerCase();
            let nextName = nextProduct.name.toLowerCase();
            if (name > nextName) {
                return -1;
            }
            if (nextName > name) {
            return 1;
        }
        return 1;
    })
    renderTable(newArr);
}
    return;
}

export const showDetail = (data, id) => {
    // for (let i = 0; i < data.length; i++) {

        // if (data[i].id === id) {
            domId('id').value = data.id;
            domId('hoTen').value = data.name;
            domId('doiTuong').value = data.doiTuong;
            domId('diaChi').value = data.address;
            domId('email').value = data.email;
            domId('toan').value = data.toan;
            domId('ly').value = data.ly;
            domId('hoa').value = data.hoa;
            domId('ngayLam').value = data.soNgayLam;
            domId('luongNgayLam').value = data.luongTheoNgay;
            domId('congTy').value = data.congTy;
            domId('hoaDon').value = data.hoaDon;
            domId('danhGia').value = data.danhGia;
            renderSelect(data.doiTuong)
        // }
    // }
}
export const clearDetail = () => {
    domId('doiTuong').value = 'all';
   let input = document.querySelectorAll('.form-control');
   input.forEach((value)=>{
    value.value = ''
   })
   
    let element  = document.querySelectorAll('.invalid-feedback');
    element.forEach((value)=>{
        value.innerHTML = ''
    })

}