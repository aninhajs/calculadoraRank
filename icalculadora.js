let vitoria = 300
let derrota = 100
let rankGeral = vitoria-derrota
let nivel;

if(rankGeral < 10){ 
    nivel= "ferro"
    console.log("o heroi tem de saldo "+rankGeral + "e está no nivel " + nivel)
} else if(rankGeral >= 11 && rankGeral<= 20){  
    nivel = "bronze"
    console.log("o heroi tem de saldo "+ rankGeral + " e está no nivel " + nivel)
} else if(rankGeral >= 21 && rankGeral<= 50){  
    nivel = "prata"
    console.log("o heroi tem de saldo "+ rankGeral + " e está no nivel " + nivel)
} else if(rankGeral >= 51 && rankGeral<= 80){  
    nivel = "ouro"
    console.log("o heroi tem de saldo "+ rankGeral + " e está no nivel " + nivel)
} else if(rankGeral >= 81 && rankGeral<= 90){  
    nivel = "diamante"
    console.log("o heroi tem de saldo "+ rankGeral + " e está no nivel " + nivel)
} else if(rankGeral >= 91 && rankGeral<= 100){  
    nivel = "lendario"
    console.log("o heroi tem de saldo "+ rankGeral + " e está no nivel " + nivel)
} else {  
    nivel = "imortal"
    console.log("o heroi tem de saldo "+ rankGeral + " e está no nivel " + nivel)
}