document.querySelector(".btn-enviar").addEventListener("click", () => {
  const valor1 = document.querySelector(".altura").value;
  const valor2 = document.querySelector(".peso").value;

  const altura = parseFloat(valor1.replace(",", "."));
  const peso = Number(valor2);

  if (!altura || !peso || !parseFloat(altura) || !Number(peso)) {
    let msgDiv = document.querySelector(".msgDiv");
    msgDiv.innerHTML = `
    <div class="msg">
    <p>Informe sua Altura e Peso </br>corretamente!</p>
    </div>
    `;
  } else {
    function getIMC(altura, peso) {
      if (altura === parseInt(altura)) {
        altura = altura / 100;
      }
      let sum = peso / (altura * altura);
      let totalSum = sum.toFixed(2);
      return totalSum;
    }
    const result = getIMC(altura, peso);

    var getImcFinal = [
      "Obesidade Grau III (mórbida)",
      "Obesidade Grau II (severa)",
      "Obesidade Grau I",
      "Sobrepeso",
      "Peso Ideal (Parabéns)",
      "Abaixo do Peso",
    ];

    let getImcMsg;
    if (result >= 40) {
      getImcMsg = getImcFinal[0];
    } else if (result >= 35) {
      getImcMsg = getImcFinal[1];
    } else if (result >= 30) {
      getImcMsg = getImcFinal[2];
    } else if (result >= 25) {
      getImcMsg = getImcFinal[3];
    } else if (result >= 18) {
      getImcMsg = getImcFinal[4];
    } else {
      getImcMsg = getImcFinal[5];
    }

    let msgDiv = document.querySelector(".msgDiv");
    msgDiv.innerHTML = `
      <div class="msgSucess">
      <p>Seu IMC: ${result}</p>
      <p>Você está: ${getImcMsg}</p>
      </div>
    `;
  }
});
