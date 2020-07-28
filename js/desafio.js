var inputValorHora = document.querySelector("#valor-hora");

var inputHorasProjeto = document.querySelector("#horas-projeto");

var resposta = document.querySelector("#resposta");

inputValorHora.addEventListener("input", apenasNumeros);

inputHorasProjeto.addEventListener("input", apenasNumeros);

function calcular() {
  // pegar valores
  var valorHora = inputValorHora.valueAsNumber;
  var horasProjeto = inputHorasProjeto.valueAsNumber;

  // calcular valor total do projeto
  var valorTotal = valorHora * horasProjeto;

  // deixar apenas duas casas e, substituir ponto por vírgula
  var valorDuasCasas = valorTotal.toFixed(2).replace(".", ",");
  // console.log(valorDuasCasas)

  resposta.textContent = "O valor total do projeto é R$ " + valorDuasCasas;
}

// remover o que não for número e substituir por vazio
function apenasNumeros(event) {
    var valor = event.currentTarget.value;
    if(parseInt(valor) == NaN)
        event.currentTarget.value = valor.replace(/[^0-9,]/gm, "");
}