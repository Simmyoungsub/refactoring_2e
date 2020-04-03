class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach((d) => (this.addProducer(new Producer(this, d))));
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    get name() {return this._name;}
    get producers() {return this._producers;}
    get totalProduction() {return this._totalProduction;}
    set totalProduction(arg) {this._totalProduction = arg;}
    get demand() {return this._demand;}
    set demand(arg) {this._demand = arg;}
    get price() {return this._price;}
    set price(arg) {this._price = arg;}
}