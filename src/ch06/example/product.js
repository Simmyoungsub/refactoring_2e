export function priceOrder(product, quntity, shippingMethod) {
    const basePrice = product.basePrice * quntity;
    const discount = Math.max(quntity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ?
        shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quntity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}