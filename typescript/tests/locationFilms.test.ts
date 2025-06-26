import { Client, Film, Categories, Director } from '../src/locationFilms'
import { describe, it, expect } from 'vitest'

describe('Location de films', () => {
    it('Un client est bien construit et ses attributs sont initialisé sans louer de films', () => {
        const laila: Client = new Client("Laila");
        expect(laila.getClientInfo()).toBe("Laila n'a loué aucun film.")
    })

    it('Un client loue un film, je vérifie que ce fim a été loué', () => {
        // 1. Je définis les variables nécessaires à la création de mon context
        const justineTriet: Director = new Director("Justine Triet", new Date(1978, 6, 17))
        const anatomieChute = new Film  ("Anatomie d'une chute", 2023, justineTriet, Categories.Fiction)

        // 2. Je définis mon context: ici, la client Laila
        const laila: Client = new Client("Laila");

        // 3. J'execute l'action qui doit être testée: ici, je loue un film
        laila.getRent(anatomieChute);

        expect(laila.getClientInfo()).toBe('Laila a aloué les films suivants : \n "Anatomie d\'une chute" a été projeté en 2023 et réalisé par Justine Triet agé de 47 ans. Anatomie d\'une chute est listé dans la catégorie : Fiction a été loué le 3/5')
    })

    it('Un client loue trop de films, je vérifie que son nombre de locations reste inférieur à 4', () => {
        // 1. Je définis les variables nécessaires à la création de mon context
        const justineTriet: Director = new Director("Justine Triet", new Date(1978, 6, 17))
        const anatomieChute = new Film  ("Anatomie d'une chute", 2023, justineTriet, Categories.Fiction)

        // 2. Je définis mon context: ici, la client Laila
        const laila: Client = new Client("Laila");

        // 3. J'execute l'action qui doit être testée: ici, je loue des films
        expect(laila.getRent(anatomieChute)).toBe(true);
        expect(laila.getRent(anatomieChute)).toBe(true);
        expect(laila.getRent(anatomieChute)).toBe(true);
        expect(laila.getRent(anatomieChute)).toBe(true);
        expect(laila.getRent(anatomieChute)).toBe(false);

        expect(laila.getRentalCount()).toBeLessThanOrEqual(4)
    })
})
