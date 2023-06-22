import { domId } from "../controller/main.js";
export default class Validation {
    checkWord(value, id, letter, mess) {
        if (value.match(letter)) {
            domId(id).innerHTML = ''
            domId(id).style.display = 'none'
            return true;
        }
        domId(id).innerHTML = mess
        domId(id).style.display = 'block'
        return false;
    }
    checkLength(value, id, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            domId(id).innerHTML = ''
            domId(id).style.display = 'none'
            return true;
        }
        domId(id).innerHTML = mess
        domId(id).style.display = 'block'
        return false;


    }

    checkPerson(idSelect,id, mess){
        if (domId(idSelect).selectedIndex !== 0) {
            domId(id).innerHTML = ''
            domId(id).style.display = 'none'
            return true;
        }
        domId(id).innerHTML = mess
        domId(id).style.display = 'block'
        return false;
    }
    checkPoint(value , id ,mess , min ,max ){
        if (value >= min && value <= max && value !== '') {
            domId(id).innerHTML = ''
            domId(id).style.display = 'none'
            return true;
        }
        domId(id).innerHTML = mess
        domId(id).style.display = 'block'
        return false;
    }
    checkId(value, id, arr, mess) {
        let result = false;
        arr.find(element => {
            if(value === element.id){
                result = true;
                
            }
        });
        if(result){
            domId(id).innerHTML = mess
            domId(id).style.display = 'block'
            return false;
        }
        domId(id).innerHTML = ''
        domId(id).style.display = 'none'
        return true;
    }
}