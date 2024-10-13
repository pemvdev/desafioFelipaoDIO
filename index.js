//DECLARAÇÃO DE VARIÁVEIS
let nivel_xp = 0;
let rank = " ";

//CRIANDO UM MÉTODO INPUT PARA EXECUÇÃO NO TERMINAL
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//CAPTAÇÃO DO NOME DO HERÓI
rl.question('Digite o nome do seu héroi: ', (nome_heroi) => {
rl.question('Qual o seu nível de XP?: ', (nivel_xp) => {
nivel_xp = parseInt(nivel_xp);

//ESTRUTURA CONDICIONAL PARA AVALIAR O RANK DO HÉROI
if(nivel_xp <= 1000){
    rank = "Ferro";
}
else if((nivel_xp > 1000 && nivel_xp <= 2000)){
    rank = "Bronze";
}
else if(nivel_xp > 2000 && nivel_xp <= 5000){
    rank = "Prata Ouro";
}
else if((nivel_xp > 5000 && nivel_xp <= 8000)){
    rank = "Platina Diamante";
}
else if((nivel_xp > 8000 && nivel_xp <= 9000)){
    rank = "Ascendente";
}
else if((nivel_xp > 9000 && nivel_xp <= 10000)){
    rank = "Imortal";
}
else{
    rank = "Radiante";
}

console.log("O Héroi de nome: " + nome_heroi + " está no nível " + rank); 


rl.close()
})
})
