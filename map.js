/*
Quando usar map:
    - Quanod você precisa obter um novo array, com a mesma quantidade de itens do array original.

    [1, 2, 3] 
    [3, 3, 9 ]

    ===================== Exercício 1 =====================
    const numbers = [1, 2, 3];
    
    const newNumber = numbers.map((item, index, array) => {
        return item * 2;
    })
    console.log(newNumber);

    ===================== Exercício 2 =====================
    const precos = [10, 23, 19];
    
    const precosMetade = precos.map((item)=>{
        return item / 2;
    });

    ===================== Exercício 3 =====================
    const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

    const saleProducts = products.map((product) =>{
        if(product.price >= 30){
            return {
                name: product.name,
                price: product.price /2
            }
        }
        return product;
    });
    
    console.log(saleProducts);
    
    console.log(precosMetade);
 */


