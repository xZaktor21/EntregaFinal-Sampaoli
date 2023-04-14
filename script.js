alert ("Bienvenidos a CoderDAO!! El precio actual de la CoderCoin es de $0,27.");

let usuario = prompt("Por favor, ingrese un nombre de usuario:");

alert ("Saludos " + usuario + "!") ;

let accion = prompt("¿Quiere realizar alguna accion? Si o no.")

if (accion == "no") {
    alert ("Gracias vuelva pronto.");
    
} else if (accion == "si") {
    let info = prompt("Consultar saldo o simular staking");
    if (info == "consultar saldo") {
        alert ("Su saldo es de 12000 CoderCoins. Es decir: $" + 12000*0.12 + " dolares" )
    } else if (info == "simular staking") {
        let dias = prompt("Elija la cantidad de dias: 30,45,60,180,365.");
        while ((dias != "30")&&(dias != "45")&&(dias != "60")&&(dias != "180")&&(dias != "365")) {
            let dias = prompt("Elija una cantidad predeterminada: 30,45,60,180,365.")
            if ((dias == "30")||(dias == "45")||(dias == "60")||(dias == "180")||(dias == "365")) {
                roi(dias);
                break;                
            }            
        }         

    } else {
        alert ("Opcion no valida")
        
    }     
} else {
    alert ("Opcion no valida.")
    
}

function roi(dias) {
    switch (dias) {
        case "30":
            alert("Usted tendria " + 12000*1.02 + " CoderCoins al finalizar.")
            
            break;
        case "45":
            alert("Usted tendria " + 12000*1.035 + " CoderCoins al finalizar.")
            
            break;
        case "60":
            alert("Usted tendria " + 12000*1.06 + " CoderCoins al finalizar.")
            
            break;
        case "180":
            alert("Usted tendria " + 12000*1.13 + " CoderCoins al finalizar.")
            
            break;
        case "365":
            alert("Usted tendria " + 12000*1.37 + " CoderCoins al finalizar.")
            
            break;
        default:
            alert("Opcion no valida.")
            break;
    }
    
}