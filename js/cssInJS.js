const x = document.getElementById("players-container");
const newChild = document.createElement("li");
// 8.17

// create element and set innertext or innerHTML
newChild.innerText = "new born baby footballer";
// find the parent where you will add the child
const playersList = document.getElementById("player-list");
// append the child to the parent
playersList.appendChild(newChild);
// console.log(x);
// console.log(v);
