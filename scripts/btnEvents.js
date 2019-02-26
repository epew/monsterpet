
let startGame = document.getElementById('play');
let welcomeContainer = document.getElementsByClassName("welcome");
let chooseCharacters = document.getElementsByClassName("choose-characters");

let exitChooseCharacter = document.getElementById("cancel-choose-characters");


startGame.addEventListener('click', function(e) {
	console.log('clicked ... ', welcomeContainer);
	welcomeContainer[0].classList.add("hide-container");
	chooseCharacters[0].classList.add("show-container");
	loadCharacters();
});

exitChooseCharacter.addEventListener('click', function(e){
	welcomeContainer[0].classList.remove("hide-container");
	chooseCharacters[0].classList.remove("show-container");
});