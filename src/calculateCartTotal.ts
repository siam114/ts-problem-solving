type Product = {
    name: string
    price: number
}

const calculateCartTotal = (product: Product[]):number=>{
     const total:number = product.reduce((acc, item)=> acc + item.price,0);
     return total
}

const products = [
    {name: "Keyborad", price: 1500},
    {name: "Mouse", price: 800},
    {name: "USB", price: 500}
]

console.log(calculateCartTotal(products));