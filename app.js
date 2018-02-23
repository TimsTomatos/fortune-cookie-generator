var fortune = [
"Your Gone",
"Your Ascending",
"Your Trascending",
"Your Gonna Caught",
"Only Time Will Tell",
"All Your Homework is Due Tommorrow",
"Your Coding Project is Gonna be Due this Week instead of Next Week",
"This is Gonna Take Awhile...",
"Undefined... (JK ;)  )",
"Your Trig Exam is Due Tommorrow"
];



function forTell() {

 var myFortune = Math.floor((Math.random() * fortune.length));

document.getElementById("fortune-cookie-text").innerHTML = fortune[myFortune]

var allFortune = document.createElement("LI");
var allOfFortune = document.createTextNode(fortune[myFortune]);
allFortune.appendChild(allOfFortune);
document.getElementById("previous-fortunes").appendChild(allFortune);
fortune.splice(myFortune,1);


if (fortune == 0) {
	fortune.splice(0,0,
		"Your Gone",
		"Your Ascending",
		"Your Trascending",
		"Your Gonna Caught",
		"Only Time Will Tell",
		"All Your Homework is Due Tommorrow",
		"Your Coding Project is Gonna be Due this Week instead of Next Week",
		"This is Gonna Take Awhile...",
		"Undefined... (JK ;)  )",
		"Your Trig Exam is Due Tommorrow");
}
}

