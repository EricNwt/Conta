var itensParaCalculo = [];
function adcionarItemParaCalculo() {
  alert("Os valores registrados serão exibidos somente ao pressionar o botão Calcular conta.");
  var clientes = document.getElementsByClassName("cliente");
  var produtos = document.getElementsByClassName("produto");
  var valores = document.getElementsByClassName("valor");

  for (var i = 0; i < clientes.length; i++) {
    var cliente = clientes[i].value;
    var produto = produtos[i].value;
    var valor = parseFloat(valores[i].value);
    itensParaCalculo.push({ cliente: cliente, produto: produto, valor: valor });
  }
  limparEntradas();
}

function limparEntradas() {
  var clientes = document.getElementsByClassName("cliente");
  var produtos = document.getElementsByClassName("produto");
  var valores = document.getElementsByClassName("valor");

  for (var i = 0; i < clientes.length; i++) {
    clientes[i].value = "";
    produtos[i].value = "";
    valores[i].value = "";
  }
}

function calculo() {
  var total = 0;
  for (var i = 0; i < itensParaCalculo.length; i++) {
    total += itensParaCalculo[i].valor;
  }

  var clientesTotal = itensParaCalculo.length;
  var calculoFinal = document.getElementById("calculoFinal");
  calculoFinal.innerHTML = "";

  for (var i = 0; i < itensParaCalculo.length; i++) {
    var cliente = itensParaCalculo[i].cliente;
    var produto = itensParaCalculo[i].produto;
    var valor = itensParaCalculo[i].valor;

    var servicoCarregado = (valor * 0.1) / clientesTotal;
    valor += servicoCarregado;

    var resultado = document.createElement("h4");
    resultado.innerText = "Cliente: " + cliente + " | Produto: " + produto + " | Valor Final: R$" + valor.toFixed(2);
    calculoFinal.appendChild(resultado);
  }
  itensParaCalculo = [];
}