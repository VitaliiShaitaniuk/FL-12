class Fighter {
    constructor({name, damage, hp, strength, agility}) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._maxHp = hp;
        this._strength = strength;
        this._agility = agility;
        this._wins = 0;
        this._losses = 0;
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
    attack(fighter){
        const maxProbability = 100;
        const probability = maxProbability - (fighter._agility + fighter._strength);
        const successful = Math.floor(Math.random()*maxProbability);

        if(successful>probability) {
            console.log(`${this._name} attack missed`);
        }else{
            fighter.dealDamage(this._damage);
            console.log(`${this._name} make ${this._damage} damage to ${fighter._name}`);
        } 
    }
    logCombatHistory(){
        console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
    }
    heal(health){
        this._hp = this._hp + health > this._maxHp ? this._maxHp : this._hp + health;
    }
    dealDamage(damage){
        this._hp = this._hp - damage < 0 ? 0 : this._hp - damage;
    }
    addWin() {
        this._wins += 1;
    }
    addLoss() {
        this._losses += 1;
    }

}



const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20}); 
