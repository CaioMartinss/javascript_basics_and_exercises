/*
Quando voce deve usar o Filter:

    - quando voce precisa obter um novo array, com uma quantidade de itens menor do que o array original.

[1, 2, 3] [1, 3]
*/

// ===================== Exercício 1 =====================
const randomNumbers = [36, 99, 37, 63];

const numbersGreaterThan37 = randomNumbers.filter((item) => {
    return item > 37;
});
//console.log(numbersGreaterThan37);


// ===================== Exercício 2 =====================
const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
];

const premiumUsers = users.filter((users)=>{
    return users.premium;
});
//console.log(premiumUsers)


/*====== Exercicio 3 ======= */
function number(value){
    return value > 10;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,30, 80].filter(number);
//console.log(numbers)

