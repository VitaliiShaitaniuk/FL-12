class Fighter {
    constructor({name, damage, hp, strength, agility}) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._strength = strength;
        this._agility = agility;
        
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._hp;
    }
    
}
const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); 
let damage = myFighter.getDamage();
console.log(damage); 
