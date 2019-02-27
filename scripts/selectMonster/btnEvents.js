let startGame = document.getElementById('play');
let welcomeContainer = document.getElementsByClassName("welcome");
let chooseCharacters = document.getElementsByClassName("choose-characters");

let exitChooseCharacter = document.getElementById("cancel-choose-characters");
let characterContainer = document.getElementsByClassName("character-container");


/*
* When you Click the 'PLAY' button, 
* second screen (Choose a Monster) is shown
*/
startGame.addEventListener('click', function(e) {
	
	welcomeContainer[0].classList.add("hide-container");
	chooseCharacters[0].classList.add("show-container");
	loadCharacters();
});

/*
* If you do not want to select a monster anymore and click the 'x' button,
* Second screen will be hidden and the first one will be shown.
*/
exitChooseCharacter.addEventListener('click', function(e){

	welcomeContainer[0].classList.remove("hide-container");
	chooseCharacters[0].classList.remove("show-container");

	resetSelectedMonster();
});

/*
* Select a monster. You can select only one monser.
* the 'choose character' btn should be enabled when you selected a charcater.
*/
characterContainer[0].addEventListener('click', function(e){
	
	try {

		let wasSelected = resetSelectedMonster();

		let selected = e.target.getAttribute("id");

		monsters[selected].isSelected = true;
		document.getElementById("btn-choose").disabled = false;

		e.target.classList.add("selected-character");

	} catch {}
	
});
