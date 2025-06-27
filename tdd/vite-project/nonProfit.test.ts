import { expect, test } from "vitest";
import { Member, NonProfit } from "./nonProfit";

test('Add Members in non-profit', () => {
    const croixRouge = new NonProfit('Croix rouge', 'Paris', 3);

    expect(croixRouge.members.length).toBe(0);
    croixRouge.addMember(new Member('Bob', 33, 'Paris'));
    expect(croixRouge.members.length).toBe(1);
    expect(() => croixRouge.addMember(new Member('Eva', 37, "Bordeaux"))).toThrow('Mismatching cities');
    expect(croixRouge.members.length).toBe(1)
})

"vérifier l'âge, majeur ou pas"
"Vérifier si à la souscription, ça ne dépasse pas le nombre max d'adhérents"
"match des villes"
