/*
    Quando voce deve usar o reduce:
        - quando baseado no array original, voce precisa reduzir a um unico valor.
        [1,2,3] => 6
*/

/*======= Exercicio 1 ========*/
const number = [1, 2, 3];
const sum_result = number.reduce((accumulator, item) => {
    return accumulator + item;
}, 0);
//console.log(sum_result);

/*======= Exercicio 2 ========*/
const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
];

const roger_score = phaseScores.reduce((accumulator, phaseScores) =>{
    if(phaseScores.name === "Alfredo Braga"){
        return accumulator + phaseScores.score;
    }

    return accumulator;
}, 0);


//console.log(roger_score);