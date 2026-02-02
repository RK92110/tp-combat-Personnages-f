import { Character } from "./character.type";
import { Action } from "./action.type";

export class Guerrier extends Character {
    constructor(name: string) {
        const actions: Action[] = [
            { name: "Coup d'épée", type: 'attack', minDamage: 10, maxDamage: 20 },
            { name: "Bouclier", type: 'defense' }
        ];
        super(name, 50, 150, actions);
    }
}
