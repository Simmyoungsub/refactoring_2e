const reading = {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017
};

export function acquireReading() {
    return reading;
};

export function baseRate(month, year) {
    return 1;
};

export function taxThreshold(year) {
    return 10;
}