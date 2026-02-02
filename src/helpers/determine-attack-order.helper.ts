import { Character } from "../types/character.type";

export function determineAttackOrder(
  p1: Character,
  p2: Character
): { first: Character, second: Character } {
  // 1. Calculate the probability for p1 to attack first
  const totalSpeed = p1.attackSpeed + p2.attackSpeed;
  const p1InitiativeChance = p1.attackSpeed / totalSpeed;

  // 2. "Roll the dice"
  if (Math.random() < p1InitiativeChance) {
    // P1 wins initiative
    return { first: p1, second: p2 };
  } else {
    // P2 wins initiative
    return { first: p2, second: p1 };
  }
}