let monster = {
	talk
}

let characterMonster = {
	sound: 'meow'
}

Object.setPrototypeOf(characterMonster, monster);

characterMonster.talk();
