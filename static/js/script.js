
var currentUser = "O";

function handleClickEvent(event) {
  if (event.target.innerHTML.includes("O") || event.target.innerHTML.includes("X" )) return;

  event.target.innerHTML = currentUser;

  if (currentUser === "O") {
    currentUser = "X";
  } else {
    currentUser = "O";
  }
}
  