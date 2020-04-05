let defaultOwner = {firstName: 'sim', lastName: 'myoungsub'};

export function getDefaultOwner() {
    return new Person(defaultOwner);
};

export function setDefaultOwner(arg) {
    defaultOwner = arg;
};

class Person {
    constructor(data) {
        this._firstName = data.firstName;
        this._lastName = data.lastName;
    }

    get firstName() {return this._firstName;}
    set firstName(name) {return this._firstName = name;} 
    get lastName() {return this._lastName;}
    set lastName(name) {return this._lastName = name;}
}