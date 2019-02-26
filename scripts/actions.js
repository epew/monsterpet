
function talk() {
	console.log(this);
	console.log(this.sound);
}

function loadCharacters() {

	for(let i=0; i < monsters.length; i++) {

		let chacaterContainer = document.getElementsByClassName('character-container')
		let character = document.createElement('div');
		let bckImage = 'resources/images/characters/'+ monsters[i].imageLink;

		character.classList.add('character');
		character.style.backgroundImage = 'url('+ bckImage +')';

		chacaterContainer[0].appendChild(character);
	}
}