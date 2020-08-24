const button = document.getElementById("btnCalc");
const saida = document.getElementById("div_CalcResultsFrame");
let imc = null;

const Calcular = () => {
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    if ( nome !== "" && altura !== "" && peso !== "") {
        imc = (peso /(altura * altura)).toFixed(2);
        if (imc <= 18.5 ) {
            saida.innerHTML = nome + "seu imc é " + imc + ", você esta a baixo do peso";
        }
        if ( imc > 18.5 && imc <= 24.9)  {
            saida.innerHTML = nome + " seu imc é " + imc + ", você esta com peso saudável";
        }

        if ( imc >= 25.0 && imc <= 29.9)  {
            saida.innerHTML = nome + " seu imc é " + imc + ", você esta com sobrepeso";
        }

        if ( imc >= 30 )  {
            saida.innerHTML = nome + " seu imc é " + imc + ", você esta com Obesidade";
        }
    }
    else {
        alert ("preencha todos os campos");
    }
}

button.addEventListener("click" , Calcular);