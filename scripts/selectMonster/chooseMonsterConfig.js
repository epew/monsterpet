let basicMonster = function(id, imageLink, isSelected) {
	this.id = id;
	this.imageLink = imageLink;
	this.isSelected = isSelected;
}

let magicMonsetr = function(magic) {
	this.magic = magic;
}

let specialMonster = function(power, sound){
	this.power = power;
	this.sound = sound;
}


Object.setPrototypeOf(magicMonsetr, basicMonster);
Object.setPrototypeOf(specialMonster, basicMonster);


console.dir(magicMonsetr);
console.dir(specialMonster);


let magicMonsters =[];
let specialMonsters =[];


for(let i=0; i<monsters.length; i++) {

	let n = monsters.length/2;

	if(i<n) {
		monster = new magicMonsetr("alohomora");

		monster.id = monsters[i].id;
		monster.imageLink = monsters[i].imageLink;
		monster.isSelected = monsters[i].isSelected;

		magicMonsters.push(monster);

	} else {

		monster = new specialMonster("fly", "rwar");

		monster.id = monsters[i].id;
		monster.imageLink = monsters[i].imageLink;
		monster.isSelected = monsters[i].isSelected;

		specialMonsters.push(monster);
	}
}


console.log(' magicMonsters ', magicMonsters);
console.log(' specialMonsters ', specialMonsters);

