export default class ListPersons {
    constructor() {
        this.arr = []

    }
    addPerson(person) {
        this.arr.push(person)
    }
    findId(id) {
        return this.arr.findIndex((person) => person.id === id || person.doiTuong === id)
    }
    findType(type) {
        return this.arr.filter((person) => person.doiTuong === type || type === 'all')
    }
    findPerson(id) {
        let index = this.findId(id);
        if (index !== -1) {
            return this.arr[index]
        }
    }
    deletePerson(id) {
        let index = this.findId(id)
        if (index !== -1) {
            return this.arr.splice(index, 1)
        }
    }
    updatePerson(person) {
        let index = this.findId(person.id);
        if (index !== -1) {
            return this.arr[index] = person;
        }
    }
}
