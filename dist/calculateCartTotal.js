"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (product) => {
    const total = product.reduce((acc, item) => acc + item.price, 0);
    return total;
};
const products = [
    { name: "Keyborad", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB", price: 500 }
];
console.log(calculateCartTotal(products));
//# sourceMappingURL=calculateCartTotal.js.map