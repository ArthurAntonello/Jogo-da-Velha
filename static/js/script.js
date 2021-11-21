
var currentUser = "O";



//Esta função está atribuindo que o proximo jogador não possa alterar o que o outro jogador preencheu e mudando o preenchimento de texto do botão selecionado
function handleClickEvent(event) {
  if (event.target.value.includes("O") || event.target.value.includes("X")) return;

  event.target.value = currentUser;
  const user = currentUser // fixando o valor do user

  window.setTimeout(() => verify(user), 300) //adicionando um delay de 500s antes de aplicar o verify, para aparecer o resultado antes de verificar quem é o ganhador

  if (currentUser === "O") {
    currentUser = "X";
  } else {
    currentUser = "O";
  }
  // Setando qual o jogador, apontando para o innerHTML do h1 com id="currentPlayer"
  
  const currentPlayerH1 = document.getElementById("currentPlayer")
  currentPlayerH1.innerHTML = "Jogador Atual: " + currentUser
}

function verify(user) {

  var casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo

    // Linha 1 - verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  if (casas[0].value == casas[1].value && casas[1].value == casas[2].value && casas[0].value !== "") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Linha 2- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[3].value == casas[4].value && casas[4].value == casas[5].value && casas[3].value !== "") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Linha 3- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[6].value == casas[7].value && casas[7].value == casas[8].value && casas[6].value!=="") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Coluna 1- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[0].value == casas[3].value && casas[3].value == casas[6].value && casas[0].value!== "") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Coluna 2- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[1].value == casas[4].value && casas[4].value == casas[7].value && casas[1].value !== "") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Coluna 3- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[2].value == casas[5].value && casas[5].value == casas[8].value && casas[2].value !== "") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Diagonal 1- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[0].value == casas[4].value && casas[4].value == casas[8].value && casas[0].value!== "") {
    window.alert('O vencedor é ' + user)
    location.reload()

    // Diagonal 2- verificar igualdade das casas e, se pelo menos uma for diferente de "", todas as outras são iguais dai
  } else if (casas[2].value == casas[4].value && casas[4].value == casas[6].value && casas[2].value !== "") {
    window.alert('O vencedor é ' + user)
    location.reload()
  }
  // Se todas forem preenchidas, mas nenhuma for igual, deu velha
  else if (
    casas[0].value !== "" &&
    casas[1].value !== "" &&
    casas[2].value !== "" &&
    casas[3].value !== "" &&
    casas[4].value !== "" &&
    casas[5].value !== "" &&
    casas[6].value !== "" &&
    casas[7].value !== "" &&
    casas[8].value !== ""
  ) {
    window.alert('DEU VELHA! ')
    location.reload()
  }
}


  