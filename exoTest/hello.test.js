import { expect, test } from 'vitest'
import { sayHello } from './hello'

test('Cas de démarrage #1 - Dire bonjour avec un prénom', () => {
  expect(sayHello("Laïla")).toBe("Bonjour, Laïla !");
  expect(sayHello("Théo")).toBe("Bonjour, Théo !");
})