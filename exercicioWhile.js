/* let diaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];

let i = 0
while(i < diaSemana.length){
    console.log(diaSemana[i])
    i++
}; */

/////////////////////////


/* let i = 10
while(i >= 0){
    console.log([i]);
    i--
} */

/////////////////////////

const prompt = require("prompt-sync")()
let tabuada = prompt("Escolha um número ");
let limite = prompt("Qual o limite de números? ");
let i = 1;

while(i <= limite){
    console.log(tabuada, "X" , i, "=", tabuada*i);

    //literais
 /*    console.log(`${tabuada} X ${i} = ${tabuada*i}`);
    i++ */
}


