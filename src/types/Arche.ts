import { Character } from "./character.type";
import { Action } from "./action.type";

export class Archer extends Character {
    constructor(name: string) {
        const actions: Action[] = [
            { name: "Tir à l'arc", type: 'attack', minDamage: 15, maxDamage: 25 },
            { name: "Esquive", type: 'defense' }
        ];
        super(name, 70, 100, actions);
    }
}
