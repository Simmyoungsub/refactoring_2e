import {priceOrder} from './product';
import {expect} from 'chai';

describe('product', function() {
    let product = null;
    let quantity = null;
    let shippingMethod = null;

    beforeEach(function() {
        product = {
            basePrice: 1000,
            discountThreshold: 3,
            discountRate: 3,
        };

        shippingMethod = {
            discountThreshold: 3,
            discountedFee: 3,
            feePerCase: 3
        };

        quantity = 4;
    });

    it ('priceOrder', function() {
        const result = priceOrder(product, quantity, shippingMethod);
        expect(result).equal(1012);
    });
});