let age= prompt(`Inserire l'età`);
let km= prompt(`Inserire il Numero di Km da percorrere`);
let cost = (km * 0.21);
let disc20=0;
let disc40=0;
let tot=1;


if (age<18){
disc20 = (cost * 0.20);
tot = (cost - disc20);
}  else if (age>=65){
 disc40 = (cost * 0.40);
 tot = (cost - disc40);
}else{
    tot=cost;
}

tot= tot.toFixed(2);


let price = document.getElementById(`result`) 
price.innerHTML = `Il costo del biglietto è di ${tot} €`;



// // METODO 1 PIU PRECISO 

// // NUMERO DA ARROTONDARE
// let numb= 212421434.533423131231;
// // CALCOLO PER ARROTONDARE IL NUMERO 
// let rounded = Math.round((numb + Number.EPSILON) * 100) / 100;
// // STAMPA NUMERO
// console.log(rounded);



// // METODO 2 MENO PRECISO 

// // NUMERO DA ARROTONDARE 
// let numb = 12312214.124124124;

// // ISTRUZIONE PER ARROTONDARE A 2 CIFRE DOPO LA VIRGOLA 
// numb = numb.toFixed(2);
