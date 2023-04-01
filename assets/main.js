/************** PAROLA PALINDROMA ****************/ 

let parola = prompt("Inserisci una parola");
console.log(parola);

function ruotaParola(parola){

    let parolaRibaltata = '';

    for (let i = parola.length -1; i >= 0; i--) {
        parolaRibaltata += parola[i];

        console.log(parolaRibaltata);
    }

    return parolaRibaltata;

}

parolaReverse = ruotaParola(parola);


if (parolaReverse === parola) {
    console.log("la parola è palindroma");
}else{
    console.log("la parola non è palindroma");    
}


/************** pari dispari ****************/ 

let sceltaUtente = prompt("scegli pari o dispari");
let numero = parseInt( prompt("scegli un numero tra 1 e 5"));
console.log(`scelta pari o dispari dell'utente: ${sceltaUtente}`);
console.log(`nemero scelto dall'utente: ${numero}`);

function numeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numeroPc = numeroCasuale(1, 5);
console.log( `nemero casuale per il pc: ${numeroPc}` );


let somma = numero + numeroPc;
console.log(`somma tra numero utente e pc: ${somma}`);

if (pariDispari(somma) == sceltaUtente){
    console.log( `vince l'utente `);
}else{
    console.log( `vince il pc ` );
}

function pariDispari(x){
    if ( x % 2 == 0 ){
        return "pari";
    } else {
        return 'dispari';
    }
}









