//dichiarazione array di codici sconto
let CodeSconto = ["YHDNU32","JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//valorizzazione delle ore di lavoro
let OreLavorative = 0;
const Backend = 20.5;
const Frontend = 15.3;
const ProjectAnalisis = 33.6;


//Recupero dei dati dal form
function submitForm(event){
    event.preventDefault();
    //Nome
    let InputName = document.getElementById("input-name").Value;
    console.log("Nome Richiedente: " + InputName);

    //Cognome
    let InputLastName = document.getElementById("input-last-name").Value;
    console.log("Cognognome Richiedente: " + InputLastName);

    //email
    let email = document.getElementById("input-email").Value;
    console.log("Email Richiedente: " + email);

    //Ore Lavorative
    let inputHours = document.getElementById("input-hours").Value;
    console.log("Ore Richiedente: " + inputHours);

    //Tipo di Lavoro richiesto
    let TypeOfWork = document.getElementById("selezione-tipo-lavoro").Value;
    console.log("Tipo di lavoro Richiedente: " + TypeOfWork);

    //Codice Sconto
    let CodiceUtente = document.getElementById("codice-sconto").Value;
    console.log("Nome Richiedente: " + CodiceUtente);

    //Fine recupero dei dati dal form
}