/*
01

- Gere um novo array com apenas os números ímpares do array abaixo e exiba 
o novo array no console.

    Dica: pesquise por remainder operator (%).
*/

// ============= Exercício 1 - Minha Resolução ============= //
const numbers_pares_impares = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const pares = numbers_pares_impares.filter((number) => {
    if (number % 2 === 1) {
        return number;
    }
});
//console.log(pares)

/*
02

- Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/
// ============= Exercício 2 - Minha Resolução ============= //
const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]
const numbers_less_than_501 = crazyNumbers.reduce((accumulator, number) => {
    if (number < 501) {
        return accumulator + 1
    }
    return accumulator;
}, 0);
//console.log(numbers_less_than_501);


/*
03

- Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.

Dica: pesquise por exponentiation operator (**).
*/

// ============= Exercício 3 - Minha Resolução ============= //
const numberss = [5, 7, 3];
const number_square = numberss.map((number) => {
    return number ** 2;
});
//console.log(number_square);
/*
04

- Utilizando o array abaixo, gere um novo array com apenas os filmes 
    lançados antes do ano 2000;
- Exiba o novo array no console.
*/
// ============= Exercício 4 - Minha Resolução ============= //
const tarantinoMovies = [
    { name: 'Bastardos inglórios', release: 2009 },
    { name: 'Pulp Fiction', release: 1994 },
    { name: 'Kill Bill: Volume 2', release: 2004 },
    { name: 'Quatro Quartos', release: 1995 },
    { name: 'Sin City', release: 2005 },
    { name: 'Era uma Vez em... Hollywood', release: 2019 },
    { name: 'Django Livre', release: 2012 },
    { name: 'Cães de Aluguel', release: 1992 },
    { name: 'À Prova de Morte', release: 2007 },
    { name: 'Kill Bill: Volume 1', release: 2003 }
]

const new_array = tarantinoMovies.filter((movie) => {
    return movie.release < 2000;
});
//console.log(new_array);
/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/

// ============= Exercício 5 - Minha Resolução ============= //
const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D.', releaseYear: 2004 },
    { name: 'Watchmen', releaseYear: 2019 }
]

const new_array_tvShows = tvShows.map((tvShow) => {
    return tvShow.name;
});
//console.log(new_array_tvShows);
/*
06

- Exiba no console uma lista dos nomes dos jogos do array abaixo;
- A lista deve ter a formatação exemplificada abaixo do array, considerando 
inclusive o traço e o espaço antes de cada nome.

Dica: para quebrar linha, você pode usar dentro da string o caractere 
especial \n.
*/

// ============= Exercício 6 - Minha Resolução ============= //
const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 }
]

const new_array_cart = cart.map((game) => {
    return ` - ${game.name}`
});

//console.log(new_array_cart);


// ============= Exercício 7 - Minha resolução ============= //
/*
Dado um array de objetos que contêm informações de estudantes, 
calcule a média de idade dos estudantes usando o método reduce
*/
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 18 },
    { name: 'Charlie', age: 19 },
    { name: 'Dave', age: 21 }
];

const avarege_age = students.reduce((accumulator, age) => {
    return accumulator + age.age / students.length;
}, 0);

//console.log(avarege_age);

// ============= Exercício 8 - Minha resolução ============= //
/*
Dado um array de objetos que contêm informações sobre produtos em uma loja, 
crie um novo array contendo apenas os nomes dos produtos que estão em estoque 
(ou seja, com uma quantidade maior do que 0) usando os métodos filter e map.
*/

const products = [
    { name: 'Camisa', quantity: 0 },
    { name: 'Calça', quantity: 10 },
    { name: 'Meia', quantity: 5 },
    { name: 'Sapato', quantity: 3 },
    { name: 'Jaqueta', quantity: 0 }
];
const new_estoque_products = products
    .filter(product => product.quantity > 0)
    .map(item => item.name);
//console.log(new_estoque_products);

// ============= Exercício 9 - Minha resolução ============= //

/*
Dado um array de strings, 
crie um novo array onde cada string tem todos os seus caracteres em maiúsculas usando o método map.
 */

const strings = ['Olá', 'Mundo', 'EM', 'maiúsculas'];

const new_uppercase_strings = strings.map((string) => {
    return string === string.toLowerCase() ? string.toUpperCase() : string;

});
//console.log(new_uppercase_strings);

// ============= Exercício 10 - Minha resolução ============= //
/*

Dado um array de objetos que contêm informações de filmes, 
calcule a soma de todos os custos de produção usando o método reduce.

*/

const movies = [
    { title: 'Filme 1', productionCost: 5000 },
    { title: 'Filme 2', productionCost: 1000 },
    { title: 'Filme 3', productionCost: 1500 },
    { title: 'Filme 4', productionCost: 2000 },
];

const total_production_cost = movies.reduce((accumulator, cost) => {
    return accumulator + cost.productionCost;
}, 0)
//console.log(total_production_cost);

// ============= Exercício 11 - Minha resolução ============= //

/*
 Dado um array de objetos que contêm informações sobre músicas, 
 crie um novo array contendo apenas o nome e o artista de cada música usando os métodos map e filter.
*/

const musicas = [
    { nome: 'Bohemian Rhapsody', artista: 'Queen', album: 'A Night at the Opera', duracao: '5:55' },
    { nome: 'Stairway to Heaven', artista: 'Led Zeppelin', album: 'Led Zeppelin IV', duracao: '8:02' },
    { nome: 'Hotel California', artista: 'Eagles', album: 'Hotel California', duracao: '6:30' },
    { nome: 'Imagine', artista: 'John Lennon', album: 'Imagine', duracao: '3:03' },
    { nome: 'Smells Like Teen Spirit', artista: 'Nirvana', album: 'Nevermind', duracao: '5:01' }
];
const new_array_filter_map = musicas
    .filter(artista => artista.nome && artista.artista)
    .map(singer => singer.nome + ' - ' + singer.artista)
//console.log(new_array_filter_map);

function number(n) {
    let newArr = 0;
    for (let i = 1; i <= n; i++) {
        newArr += i;
    }
    return newArr;
}

//console.log(number(4));
//when the input(n) increases, the time complexity increases too.
//O(n)

function sum(n) {
    return n * (n + 1) / 2;
}
//console.log(sum(4));

String.prototype.toJadenCase = function () {
    function capitalizeFirstLetter(match) {
        return match.toUpperCase();
    }

    // Updated regular expression to handle words with single quotes
    let newString = this.replace(/\b\w'/g, capitalizeFirstLetter);

    return newString;
};
//console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

function fibonacci(n) {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
//Big O = O(n)

//console.log(fibonacci(2));
//console.log(fibonacci(3));
//console.log(fibonacci(7));

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
//console.log(factorial(5));

function primeNumber(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        return n % i === 0 ? false : true;
    }
}

//console.log(primeNumber(1));
//console.log(primeNumber(6));


function powerOfTwo(n) {
    if (n < 1) return false;

    for (let i = 1; i <= n; i++) {
        return 2 ** 1 === n ? true : false;
    }
}

//console.log(powerOfTwo(8));
