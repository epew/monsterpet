let monster = {
	talk
}

let characterMonster = {
	sound: 'meow'
}

Object.setPrototypeOf(characterMonster, monster);
// Object.setPrototypeOf(characterMonster, monsters);

characterMonster.talk();

function talk() {
	console.log(this);
	console.log(this.sound);
}
