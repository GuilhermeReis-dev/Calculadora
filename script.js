const botoes = document.querySelectorAll("button");
const result = document.querySelector(".res");
const botaoAC = document.querySelector("button[value='ac']")

let valorButtonPress;

function targetButton() {
  for (const botao of botoes) {
     if (botao !== botaoAC) {
      botao.addEventListener("click", () => {
        valorButtonPress = botao.textContent;
        result.innerHTML += `<div class="res">${valorButtonPress}</div>`;
      }) 
   }else {
    botaoAC.addEventListener("click", () => {
      result.innerHTML = ""
    })
   }
  }
}

targetButton();


function deletResult() { 
  botaoAC.addEventListener("click", () => {

    result.innerHTML += "";

  })
 }


  
