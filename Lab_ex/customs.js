var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

function randomValueFromArray(array) {
	const random = array[Math.floor(Math.random() * array.length)];
	return random;
}
var storyText =
	"So i had :presentVerb: by the dawn's early :pluralNoun: . thats why :pluralBodyPart: :pluralNoun2: at the twilight's last :adjective: gleaming, Whose happy :adjective2:";

const insertNoun = [
	"pressure",
	"damage",
	"looks",
	"cell",
	"candidate",
	"surgery",
	"length",
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


randomize.addEventListener("click", result);
function result() {
	var newStory = storyText;
	var noun = randomValueFromArray(insertNoun);
	var pluralNoun = randomValueFromArray(insertPluralNoun);
	var pluralNoun2 = randomValueFromArray(insertPluralNoun);
	var presentVerb = randomValueFromArray(insertVerb);
	var pluralBodyPart = randomValueFromArray(insertBodyParts);
	var adjective = randomValueFromArray(insertAdjective);
	var adjective2 = randomValueFromArray(insertAdjective);

	var newStory = newStory.replace(":noun:", noun);
	var newStory = newStory.replace(":pluralNoun:", pluralNoun);
	var newStory = newStory.replace(":presentVerb:", presentVerb);
	var newStory = newStory.replace(":pluralBodyPart:", pluralBodyPart);
	var newStory = newStory.replace(":adjective:", adjective);
	var newStory = newStory.replace(":pluralNoun2:", pluralNoun2);
	var newStory = newStory.replace(":adjective2:", adjective2);

	if (customName.value !== "") {
		let name = customName.value;
		newStory = newStory.replace("MyName", name);
	}
	story.textContent = newStory;
	story.style.visibility = "visible";
}