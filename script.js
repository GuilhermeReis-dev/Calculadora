const botoes = document.querySelectorAll("button");
const displayResult = document.querySelector("#resultDisplay");
let valorButtonPress;

function targetButton() {
  for (const botao of botoes) {
    botao.addEventListener("click", () => {
      valorButtonPress = botao.textContent;

      displayResult.innerHTML = valorButtonPress;
    });
  }
}

targetButton();
