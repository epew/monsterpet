let characterContainer = document.getElementsByClassName("character-container");

let selectedMonster = function () {
	let monstersStatus = [];
	for(let i=0; i<monsters.length; i++){
		monstersStatus.push(monsters[i].isSelected);
	}

	return monstersStatus;
}

characterContainer[0].addEventListener('click', function(e){
	
	try {

		let wasSelected = resetSelectedMonster();

		let selected = e.target.getAttribute("id");
		monsters[selected].isSelected = true;
		document.getElementById("btn-choose").disabled = false;

		e.target.classList.add("selected-character");

	} catch {}
	
});


let monster = {
	talk
}

let characterMonster = {
	sound: 'meow'
}

Object.setPrototypeOf(characterMonster, monster);
// Object.setPrototypeOf(characterMonster, monsters);

characterMonster.talk();

