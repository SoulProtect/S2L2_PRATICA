const mioOggetto = {
  name: "Flavia",
  surname: " Paggi",
  eta: 32,
};

document.getElementById("Name").innerHTML = mioOggetto.name;
document.getElementById("Surname").innerHTML = mioOggetto.surname;
document.getElementById("Età").innerHTML = mioOggetto.eta;

//aggiunta proprietà
mioOggetto.email = "flaviapaggi@gmail.com";
document.getElementById("email").innerHTML += mioOggetto.email;
//eliminazione proprietà
delete mioOggetto.eta;

document.getElementById("eliminata").innerHTML += mioOggetto.eta;

//creazione copia oggetto
const nuovoOggetto = mioOggetto;
nuovoOggetto.name = "Pippo";

//il valore della proprietà cambia in entrambi gli oggetti quando si usa l'operatore di assegnazione=

document.getElementById("primo").innerHTML += mioOggetto.name;
document.getElementById("secondo").innerHTML += nuovoOggetto.name;

const altroOggetto = Object.assign({}, mioOggetto);

// const altroOggetto = {...mioOggetto}
//altra sintassi per creare una copia distinta dell'oggetto

altroOggetto.name = "Paperino";

//utilizzando lo spread operator (. . .) o abject assign() si crea una copia dell'oggetto distinta dall'oggetto di partenza
document.getElementById("precedente").innerHTML += mioOggetto.name;
document.getElementById("nuovo").innerHTML += altroOggetto.name;
//arrey
const mioArrey = ["gatto", "cane", "coniglio"];
// lettura intero array
document.getElementById("array").innerHTML = mioArrey;

//destrutturazione
document.getElementById("primaVoce").innerHTML = mioArrey[0];
document.getElementById("secondaVoce").innerHTML = mioArrey[1];
document.getElementById("terzaVoce").innerHTML = mioArrey[2];

mioArrey.sort();

document.getElementById("ordinato").innerHTML = mioArrey;

document.getElementById("ordinato1").innerHTML = mioArrey[0];
document.getElementById("ordinato2").innerHTML = mioArrey[1];
document.getElementById("ordinato3").innerHTML = mioArrey[2];


//flussi condizionali

let peso = 14
//if 
if (peso > 15) {
    document.getElementById('semplice').innerHTML = 'il peso è superiore alla portata del pallet'
 }
 //if-else
 if (peso<= 15) {
    document.getElementById('ifElse').innerHTML = 'il peso è adatto al pallet'
    
 } else {
    document.getElementById('ifElse').innerHTML='troppo pesante per un pallet'
 }

//if-else if-else
let nps = 80
if (nps<=35){
document.getElementById('nps').innerHTML = 'NPS Insufficente'}
else if (nps<=70){
document.getElementById('nps').innerHTML = 'NPS sufficiente'}
else {
document.getElementById('nps').innerHTML = 'NPS Ottimo'}


 document.getElementById('successivo').innerHTML = 'javascript và avanti' 

 //range di condizioni
 let voto = 8.5;
 let presenze = 70;

 if (voto>= 7.5 || presenze >= 70) {
    document.getElementById('range').innerHTML='corso valido'
 }
 else {
    document.getElementById('range').innerHTML= 'corso non valido'
 }