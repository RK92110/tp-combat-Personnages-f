import { Character } from "./character.type";
import { Action } from "./action.type";

export class Mage extends Character {
    constructor(name: string) {
        const actions: Action[] = [
            { name: "Boule de feu", type: 'attack', minDamage: 20, maxDamage: 40 },
            { name: "Bouclier magique", type: 'defense' }
        ];
        super(name, 30, 80, actions);
    }
}
