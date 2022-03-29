//dichiarazione array di codici sconto
let CodeSconto = ["YHDNU32","JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//valorizzazione delle ore di lavoro

const Backend = 20.5;
const Frontend = 15.3;
const ProjectAnalisis = 33.6;

//dichiarazione variabile Flag per controllo codice sconto
let trovato = false;
document.getElementById("codice-sconto").style.color = "#000000";

//Recupero dei dati dal form
function submitForm(event){
    event.preventDefault();

    //Preventivo finale
    let totale;

    //Nome
    let InputName = document.getElementById("input-name").value;
    console.log("Nome Richiedente: " + InputName);

    //Cognome
    let InputLastName = document.getElementById("input-last-name").value;
    console.log("Cognognome Richiedente: " + InputLastName);

    //email
    let email = document.getElementById("input-email").value;
    console.log("Email Richiedente: " + email);

    //Ore Lavorative
    let inputHours = document.getElementById("input-hours").value;
    console.log("Ore Richiedente: " + inputHours);
    inputHours = parseInt(inputHours);

    //Tipo di Lavoro richiesto
    let TypeOfWork = document.getElementById("selezione-tipo-lavoro").value;
    console.log("Tipo di lavoro Richiedente: " + TypeOfWork);

    //Controllo sulle scelte sul form
    switch (TypeOfWork) {
        case "Back-end Development": 
            totale = Backend * inputHours;
            break;
        case "Front-end Development":  
            totale = Frontend * inputHours;  
            break;
        case "Project Analisys":  
            totale = ProjectAnalisis * inputHours;  
            break;
        default:
            break;
    }
    //Codice Sconto
    let CodiceUtente = document.getElementById("codice-sconto").value;
    console.log("Sconto Richiedente: " + CodiceUtente);

    //Controllo se ha inserito un codice sconto
    for (let i = 0; i < CodeSconto.length; i++) {
        if(CodeSconto[i] == CodiceUtente){
            let discount = 0;
            discount = totale * 0.25;
            totale = totale - discount;
            console.log("Codice sconto valido");
            delete CodeSconto[i];
            trovato = true;
        }
    }

    if(trovato == false){
        document.getElementById("codice-sconto").style.color = "#ff0000";
        alert(InputName + " " + InputLastName + " il tuo Codice Sconto non è valido");
        alert("Preventivo eseguito senza applicazione di sconti");
    }

    document.getElementById("risultato").innerHTML = "Preventivo lavoro: € " + totale.toFixed(2);
}

//Fine recupero dei dati dal form