function calcularIMC() {
    // Obter os valores do peso e altura a partir dos controles deslizantes
    var peso = parseFloat(document.getElementById("PesoRange").value);
    var altura = parseFloat(document.getElementById("AlturaRange").value);
  
    // Verificar se o peso ou a altura é igual a zero
    if (peso === 0 || altura === 0) {
      alert("Os valores de peso e altura não podem ser nulos");
      return;
    }
  
    // Calcular o IMC (Índice de Massa Corporal)
    var imc = peso / (altura * altura);
    var tabelaIMC = "normal";
  
    //retornar dados de tabela IMC
    if (imc < 18.5) {
      tabelaIMC = "abaixo do peso normal";
    } else if (imc > 24.99 && imc < 30) {
      tabelaIMC = "com exesso de peso";
    } else if (imc > 29.99 && imc < 35) {
      tabelaIMC = "com obesidade classe I";
    } else if (imc > 34.99 && imc < 40) {
      tabelaIMC = "com obesidade classe II (severa)";
    } else if (imc >= 40) {
      tabelaIMC = "com obesidade classe III (mórbida)";
    }
  
    // Arredondar o IMC para 2 casas decimais
    imc = imc.toFixed(2);
  
    // Exibir o resultado do IMC
    document.getElementById("resultadoIMC").innerText = imc;
    alert(
      "O valor do seu IMC é: " +
        document.getElementById("resultadoIMC").innerText +
        ". Isso indica que voce é uma pessoa " +
        tabelaIMC +
        "."
    );
  }
  