let age= prompt(`Inserire l'età`);
let km= prompt(`Inserire il Numero di Km da percorrere`);
let cost = (km * 0.21);

if (age<18){
let disc20 = (cost * 0.20);
let tot = (cost - disc20);
}  else if (age>=65){
let disc40 = (cost * 0.40);
let tot = (cost - disc40);

}
let price = document.getElementById(`result`) 
price.innerHTML = `Il costo del biglietto è di ${tot} €`;

