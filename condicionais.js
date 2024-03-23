/* if(true){
    console.log("Olá");
} else{
    console.log("Olá falso");
} */

let dia = 5;

if(dia == 0 || dia == 6 ){
    console.log("Fim de semana");
} else if(dia == 1){
    console.log("Segunda, força na peruca");
} else if(dia == 5){
    console.log("Sextou");
} else{
    console.log("Dia útil");
}

//If ternário
let nome = "Juliano";
let idade = 18
let frase = `${nome} tem ${idade} anos e é ${(idade >= 18) ? 'Maior' : 'Menor'} de idade`
console.log(frase);

//Switch case
let valor = 1
switch(valor){
    case 1:
        console.log("Um");
        break;

    case 2:
        console.log("Dois");
        break;

    case 3:
        console.log("Três");
        break;

    default:
        console.log("Número fora do intervalo");
        break;
}

let dia = 0
switch(dia){
    case 0:
    case 6:
        console.log("Final de semana");
        break;
    case 5:
        console.log("Sextou");
        break;
    default:
        console.log("Dia de semana");
}
