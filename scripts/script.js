
let startGame = document.getElementById('play');
let welcomeContainer = document.getElementsByClassName("welcome");
let chooseCharacters = document.getElementsByClassName("choose-characters");

startGame.addEventListener('click', function(e) {
	console.log('clicked ... ', welcomeContainer);
	welcomeContainer[0].classList.add("hide-container");
	chooseCharacters[0].classList.add("show-container");
	loadCharacters();
});

let monster = {
	talk
}

let characterMonster = {
	sound: 'meow'
}

Object.setPrototypeOf(characterMonster, monster);

characterMonster.talk();

function talk() {
	console.log(this);
	console.log(this.sound);
}

function loadCharacters() {

	console.log('loading characters ...');

	for(let i=0; i < monsters.length; i++) {

		let chacaterContainer = document.getElementsByClassName('character-container')
		let character = document.createElement('div');
		let bckImage = 'resources/images/characters/'+ monsters[i].imageLink;

		character.classList.add('character');
		character.style.backgroundImage = 'url('+ bckImage +')';

		chacaterContainer[0].appendChild(character);
	}

}



