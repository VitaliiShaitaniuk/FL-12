class Fighter {
    constructor({name, damage, hp, strength, agility}) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._strength = strength;
        this._agility = agility;
        
    }
    
}
const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); 
let name = myFighter.name;
console.log(name); 
