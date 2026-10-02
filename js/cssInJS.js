//travers child & parents nodes

const findNodes = document.getElementById('players-container').childNodes[1].childNodes[3].childNodes;
console.log(findNodes);

const findNodes1=document.getElementById('players-container').childNodes[1].childNodes[3].childNodes[4]
console.log(findNodes1);

const findNodes2 =document.getElementById('players-container').childNodes[1].childNodes[3].childNodes[3]
console.log(findNodes2);

const findNodes3 =document.getElementById('players-container').childNodes[1].childNodes[3].childNodes[9]
console.log(findNodes3);

const findNodes4 =document.getElementById('players-container').childNodes[1].childNodes[3].childNodes[9].parentNode
console.log(findNodes4);
const findNodes5 =document.getElementById('players-container').childNodes[1].childNodes[3].childNodes[9].parentNode.parentNode
console.log(findNodes5);
//create your own html elements by js
const x = document.getElementById("players-container");
const newChild = document.createElement("li");
// 8.17

// create element and set innertext or innerHTML
newChild.innerText = "new born baby footballer";
// find the parent where you will add the child
const playersList = document.getElementById("player-list");
// append the child to the paraent
playersList.appendChild(newChild);
// console.log(x);
// console.log(v);
