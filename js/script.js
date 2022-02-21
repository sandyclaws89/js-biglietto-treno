let Age= prompt(`Inserire l'età`);
let Km= prompt(`Inserire il Numero di Km da percorrere`);
let Cost = (Km *0.21);

if (Age<18){
Cost= (Cost * 0.20);
}  else if (Age>=65){
Cost= (Cost * 0.40)
}
let Cost = document.getElementById(`MyVar`) 
Cost.innerHTML = `Il costo del biglietto è di ${Cost} €`;
