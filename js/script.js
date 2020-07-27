console.log("reprograma");

var ganhoMes = document.querySelector("#ganho-mes");

var inputHoras = document.querySelector("#horas-dia");

var resultado = document.querySelector("#resposta");
console.log(resultado);

function calcularValorHora() {
  //PEGAR VALORES
  var salario = ganhoMes.valueAsNumber;
  var horas = inputHoras.valueAsNumber;

  //CALCULO
  var horasMes = horas * 22;

  var valorHora = salario / horasMes;

  var valorDuasCasas = valorHora.toFixed(2);

  console.log(valorDuasCasas);

  resultado.textContent = "R$ " + valorDuasCasas;
}