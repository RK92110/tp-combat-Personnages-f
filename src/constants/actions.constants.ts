import { Action } from "../types/action.type";

export const GUERRIER_ACTIONS: Action[] = [
  { name: "Commit atomique", type: "attack", minDamage: 10, maxDamage: 10 },
  { name: "Coup de poing", type: "attack", minDamage: 8, maxDamage: 12 },
  { name: "Parade", type: "defense" },
];

export const MAGE_ACTIONS: Action[] = [
  { name: "Boule de feu", type: "attack", minDamage: 12, maxDamage: 20 },
  { name: "Soin", type: "defense" },
  { name: "Invisibilité", type: "defense" },
];

export const ARCHER_ACTIONS: Action[] = [
  { name: "Special Commit", type: "attack", minDamage: 10, maxDamage: 10 },
  { name: "Legend Slash", type: "attack", minDamage: 8, maxDamage: 12 },
  { name: "Brume", type: "defense" },
  { name: "Fléche en feu", type: "defense" },
];
// TODO: Ajouter les actions pour les mages et archers