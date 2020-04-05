import { expect } from 'chai';
import { acquireReading, taxThreshold, Reading } from './tea';

describe('tea', function () {
    it('client1', function () {
        const rawReading = acquireReading();
        const aReading = new Reading(rawReading);
        const baseCharge = aReading.baseCharge;
        expect(baseCharge).equal(10);
    });

    it('client2', function () {
        const rawReading = acquireReading();
        const aReading = new Reading(rawReading);
        const taxableCharge = aReading.taxableCharge;
        expect(taxableCharge).equal(0);
    });

    it('client3', function () {
        const rawReading = acquireReading();
        const aReading = new Reading(rawReading);
        const basicChargeAmount = aReading.baseCharge;

        expect(basicChargeAmount).equal(10);
    });
});