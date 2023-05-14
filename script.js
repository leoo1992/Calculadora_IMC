function calcularIMC() {
  var peso = parseFloat(document.getElementById("PesoRange").value);
  var altura = parseFloat(document.getElementById("AlturaRange").value);
  var validarNull = false;
  document.getElementById("inputPeso").value = peso;
  document.getElementById("inputAltura").value = altura;

  if (peso <= 0 || altura <= 0 || altura > 3 || peso > 300) {
    var validarNull = true;
    var modalNull =
      "Os valores de peso e altura não estão de acordo. <br> Insira um número válido.";
  } else {
    var validarNull = false;
    var modalNull = "";
  }

  var imc = peso / (altura * altura);
  var tabelaIMC = "<br> Voce está com peso normal !";

  if (imc < 18.5) {
    tabelaIMC = "<br> Voce está abaixo do peso normal !";
  } else if (imc > 24.99 && imc < 30) {
    tabelaIMC = "<br> Voce está com exesso de peso !";
  } else if (imc > 29.99 && imc < 35) {
    tabelaIMC = "<br> Voce está com obesidade classe I !";
  } else if (imc > 34.99 && imc < 40) {
    tabelaIMC = "<br> Voce está com obesidade classe II (severa) !";
  } else if (imc >= 40) {
    tabelaIMC = "<br> Voce está com obesidade classe III (mórbida) !";
  }

  imc = imc.toFixed(2);

  if (validarNull) {
    document.getElementById("resultadoIMC").innerHTML = modalNull;

    var myModal = new bootstrap.Modal(
      document.getElementById("modal-imc-result"),
      {
        keyboard: false
      }
    );
    myModal.show();
  } else {
    document.getElementById("resultadoIMC").innerHTML =
      "Seu IMC é : " + imc + tabelaIMC;

    var myModal = new bootstrap.Modal(
      document.getElementById("modal-imc-result"),
      {
        keyboard: false
      }
    );
    myModal.show();
  }
}
