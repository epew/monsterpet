let characterContainer = document.getElementsByClassName("character-container");

let selectedMonster = function () {
	let monstersStatus = [];
	for(let i=0; i<monsters.length; i++){
		monstersStatus.push(monsters[i].isSelected);
	}

	return monstersStatus;
}




console.log('selectedMonster ', selectedMonster());

characterContainer[0].addEventListener('click', function(e){
	
	try {
		// removeSelectedClass();
		// resetSelectedMonster();

		console.log('clicked .. . .');

		let wasSelected = resetSelectedMonster();

		console.log('wasSelected .. . .', wasSelected);

		if(!wasSelected.isNaN()) {
			let id = resetSelectedMonster();
			removeSelectedClass (id);
		}

		console.log('resetSelectedMonster ', resetSelectedMonster());

		
		let selected = e.target.getAttribute("id");
		monsters[selected].isSelected = true;

		console.log('selectedMonster ',selectedMonster());

		
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

function removeSelectedClass(id) {
	console.log('in removeSelectedClass(id) ', id);



}
