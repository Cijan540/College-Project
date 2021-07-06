let add = document.querySelector("#addItem");
let items = document.querySelector("#items");

add.onclick = function()
{
    let text = document.listform.listname.value;
    //alert
    let listtext = document.createTextNode(text);
    //creating list element
    let list = document.createElement("li");

    //creating delete button
    let listBtn = document.createElement("button");
    //adding level in button
    listBtn.textContent = "Delete"


    //adding list items inside ul

    items.appendChild(list);
    list.appendChild(listtext);
    list.appendChild(listBtn);

    //removing the list items after clicking on delete button
    listBtn.onclick = function(){
    items.removeChild(list);

}
    

}


var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

function randomValueFromArray(array) {
	const random = array[Math.floor(Math.random() * array.length)];
	return random;
}
var storyText =
	"O say can MyName you :presentVerb: by the dawn's early :pluralNoun: . What so :pluralBodyPart: :pluralNoun2: at the twilight's last :adjective: gleaming, Whose broad :adjective2:";

const insertNoun = [
	"impression",
	"injury",
	"appearance",
	"phone",
	"candidate",
	"surgery",
	"measurement",
	"literature",
	"introduction",
	"property",
];
const insertPluralNoun = [
	"magazines",
	"footballs",
	"drawers",
	"ratios",
	"cabinets",
	"computers",
	"decisions",
	"celebrations",
	"marriages",
	"dealers",
];
const insertVerb = [
	"dislike",
	"cheer",
	"charge",
	"arouse",
	"tempt",
	"depend",
	"vote",
	"divert",
	"impose",
	"fly",
];
const insertBodyParts = [
	"tongues",
	"necks",
	"eyelashes",
	"upper arms",
	"knees",
	"thighs",
	"teeth",
	"knuckles",
	"legs",
	"bellies",
];
const insertAdjective = [
	"flippant",
	"humorous",
	"unarmed",
	"tense",
	"jagged",
	"odd",
	"elegant",
	"fearless",
	"abrasive",
	"psychological",
];


