import { getRandomInt } from "../helpers/random-int.helper";
import { Action } from "./action.type";

export class Character {
    public attackSpeed: number;
    public name: string;

    protected health: number;
    protected isProtected: boolean = false;
    protected possibleActions: Action[] = [];
    constructor(name: string, speed: number, health: number = 100, actions: Action[] = []) {
        this.name = name;
        this.attackSpeed = speed;
        this.health = health;
        this.possibleActions = actions;
        console.log(`${this.name} a rejoint le combat (PV: ${this.health}, VA: ${this.attackSpeed})`);
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public protectSelf(): void {
        this.isProtected = true;
        console.log(`\n🛡️ ${this.name} utilise son bouclier !`);
    }

    public takeDamage(amount: number): void {
        if (this.isProtected) {
            console.log(`\n🛡️ ${this.name} a bloque l'attaque et na aucun dégat`);
            this.isProtected = false; // reset protection after blocking an attack
        } else {
            this.health -= amount;
            console.log(`\n💥 ${this.name} subit ${amount} points de dégât ! (PV restants: ${this.health})`);
        }
    }

    public performTurn(target: Character): void {
        const action = this.chooseAction();
        if (action.type === 'attack') {
            const damage = getRandomInt(action.minDamage || 0, action.maxDamage || 0);
            console.log(`\n⚔️ ${this.name} attaque ${target.name} avec ${action.name} pour ${damage} dégâts.`);
            target.takeDamage(damage);
        } else if (action.type === 'defense') {
            this.protectSelf();
        }
    }

    protected chooseAction(): Action {
        const randomIndex = getRandomInt(0, this.possibleActions.length - 1);
        return this.possibleActions[randomIndex];
    }
}
