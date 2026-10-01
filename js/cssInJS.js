//document.getElementById("players-container").innerHTML;
const plyerSec = document.getElementById("players-container");
console.log("htmls full view", plyerSec);
// ---------all text------------
const inTxt = plyerSec.innerText;
console.log("text full view", inTxt);
// ---------all text & html------------
const inHtml = plyerSec.innerHTML;
console.log("text full view", inHtml);
// ---------insert li with tag by js------------
document.getElementById("players-container").innerHTML = "<li>My random</li>";
console.log(document.getElementById("players-container").innerHTML);

const sections = document.getElementsByTagName("section");
console.log(sections);

// ......................5:07.........
