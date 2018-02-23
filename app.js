function forTell() {
var fortune = ["test","quiz","hw","cw"];


 var f = Math.floor((Math.random() * fortune.length));

document.getElementById("unfortune").innerHTML = fortune[f]

var allFortune = document.createElement("LI");
var allOfFortune = document.createTextNode(fortune[f]);
allFortune.appendChild(allOfFortune);
document.getElementById("oldFort").appendChild(allFortune);
//fortune.indexOf(document.getElementById("unfortune").innerHTML)
fortell.splice(f,1)
}
//if fortune == 0 


