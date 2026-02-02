export type Action =    
| { name: string; type: 'attack'; minDamage?: number; maxDamage?: number; }    
| { name: string; type: 'defense'; };

export default Action;
