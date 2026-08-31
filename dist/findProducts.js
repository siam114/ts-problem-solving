"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findProducts = (products, category) => {
    const categoryProducts = products.filter((product) => product.category === category);
    return categoryProducts;
};
const products = [
    { name: 'iphone 15', price: 90000, category: 'phone' },
    { name: 'samsung', price: 85000, category: 'phone' },
    { name: 'Macbook Air', price: 120000, category: 'laptop' },
    { name: 'Dell', price: 110000, category: 'laptop' }
];
console.log(findProducts(products, 'phone'));
//# sourceMappingURL=findProducts.js.map