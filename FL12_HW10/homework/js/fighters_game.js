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

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        console.log(`${fighter2.getHealth() === 0 ? 
            fighter2.getName() : fighter1.getName()} is dead and can't fight!`);
        return;
    }
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        if (fighter1.getHealth() > 0) {
            fighter1.attack(fighter2)
        }
        if (fighter2.getHealth() > 0) {
            fighter2.attack(fighter1)
        }
    }

    fighter1.getHealth() > 0 ? fighter1.addWin() : fighter1.addLoss();
    fighter2.getHealth() > 0 ? fighter2.addWin() : fighter2.addLoss();

    fighter1.logCombatHistory();
    fighter2.logCombatHistory();
}

const maximus = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const commodus = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20}); 
battle(maximus, commodus);
