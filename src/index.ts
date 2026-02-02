import { Guerrier } from "./types/Guerrier";
import { Mage } from "./types/Mage";
import { determineAttackOrder } from "./helpers/determine-attack-order.helper";

function startCombat() {
    const p1 = new Guerrier("Grog");
    const p2 = new Mage("Gandalf");

    console.log("\n--- LE COMBAT COMMENCE ---");

    let turn = 1;
    while (p1.isAlive() && p2.isAlive()) {
        console.log(`\n--- Tour ${turn} ---`);

        const { first, second } = determineAttackOrder(p1, p2);

        first.performTurn(second);
        if (second.isAlive()) {
            second.performTurn(first);
        }

        turn++;
    }

    console.log("\n--- FIN DU COMBAT ---");
    if (p1.isAlive()) {
        console.log(`🏆 ${p1.name} a gagné !`);
    } else if (p2.isAlive()) {
        console.log(`🏆 ${p2.name} a gagné !`);
    } else {
        console.log("🤝 C'est un match nul !");
    }
}

startCombat();
