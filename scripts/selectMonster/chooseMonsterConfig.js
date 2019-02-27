/*
* Monsters Constructors
*/
let BasicMonster = function(id, imageLink, isSelected) {
	this.id = id;
	this.imageLink = imageLink;
	this.isSelected = isSelected;
}

let MagicMonsetr = function(spell) {
	this.spell = spell;
}

let SpecialMonster = function(power, sound){
	this.power = power;
	this.sound = sound;
}

Object.setPrototypeOf(MagicMonsetr, BasicMonster);
Object.setPrototypeOf(SpecialMonster, BasicMonster);

console.dir(MagicMonsetr);
console.dir(SpecialMonster);

let magicMonsters =[];
let specialMonsters =[];
let selectedMonster ={};

/*
* Making first half of 'monsters' object from data.js, 
* 'Magic' and the second half 'Special'
* and settings some defaults properties
*/
for(let i=0; i<monsters.length; i++) {

	let n = monsters.length/2;

	if(i<n) {

		monster = new MagicMonsetr("alohomora");

		monster.id = monsters[i].id;
		monster.imageLink = monsters[i].imageLink;
		monster.isSelected = monsters[i].isSelected;

		magicMonsters.push(monster);

	} else {

		monster = new SpecialMonster("fly", "rwar");

		monster.id = monsters[i].id;
		monster.imageLink = monsters[i].imageLink;
		monster.isSelected = monsters[i].isSelected;

		specialMonsters.push(monster);
	}
}

console.log('magicMonsters ', magicMonsters);
console.log('specialMonsters ', specialMonsters);

