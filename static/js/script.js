
var currentUser = "O";

var casas = document.getElementsByTagName('button'); //pega a lista de casas do tabuleiro do jogo





//Esta função está atribuindo que o proximo jogador não possa alterar o que o outro jogador preencheu e mudando o preenchimento de texto do botão selecionado
function handleClickEvent(event) {

  

  if (event.target.innerHTML.includes("O") || event.target.innerHTML.includes("X" )) return;

  event.target.innerHTML = currentUser;

  if (currentUser === "O") {
    currentUser = "X";
  } else {
    currentUser = "O";
  }

 
}

function verify(){
  // Linha 1
  if (casas[0].innerHTML == casas[1].innerHTML == casas[2].innerHTML != undefined) {
    window.alert(casas[0].value + casas[1].value + casas[2].value)
    location.reload()

    // Linha 2
  } else if (casas[3].innerHTML == casas[4].innerHTML == casas[5].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()

    // Linha 3
  } else if (casas[6].innerHTML == casas[7].innerHTML == casas[8].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()

    // Coluna 1
  } else if (casas[0].innerHTML == casas[3].innerHTML == casas[6].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()

    // Coluna 2
  } else if (casas[1].innerHTML == casas[4].innerHTML == casas[7].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()

    // Coluna 3
  } else if (casas[2].innerHTML == casas[5].innerHTML == casas[8].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()

    // Diagonal 1
  } else if (casas[0].innerHTML == casas[4].innerHTML == casas[8].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()

    // Diagonal 3
  } else if (casas[2].innerHTML == casas[4].innerHTML == casas[6].innerHTML != undefined) {
    window.alert('O vencedor é ' + currentUser)
    location.reload()
  }
  else if (
    casas[0].value != undefined &&
    casas[1].value != undefined &&
    casas[2].value != undefined &&
    casas[3].value != undefined &&
    casas[4].value != undefined &&
    casas[5].value != undefined &&
    casas[6].value != undefined &&
    casas[7].value != undefined &&
    casas[8].value != undefined
  ) {
    window.alert('DEU VELHA! ')
    location.reload()
  } else {
  pass
  }
}


  