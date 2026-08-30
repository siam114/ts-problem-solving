"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStockStatus = (stock) => {
    if (stock === 0) {
        return "Out Of Stock";
    }
    else if (stock >= 1 && stock <= 5) {
        return "Almost Sold Out";
    }
    else if (stock >= 6 && stock <= 20) {
        return "Available";
    }
    return "In Stock";
};
// console.log(getStockStatus(50))
//# sourceMappingURL=getStockStatus.js.map