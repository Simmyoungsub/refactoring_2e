import {expect} from 'chai';
import {acquireReading, baseRate, taxThreshold, Reading} from './tea';

describe('tea', function() {
    it ('client1', function() {
        const aReading = acquireReading();
        const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
        expect(baseCharge).equal(10);
    });

    it ('client2', function() {
        const aReading = acquireReading();
        const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
        const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
        expect(taxableCharge).equal(0);
    });

    it ('client3', function() {
        const rawReading = acquireReading();
        const aReading = new Reading(rawReading);
        const basicChargeAmount = aReading.calculateBaseCharge;

        expect(basicChargeAmount).equal(10);
    });
});