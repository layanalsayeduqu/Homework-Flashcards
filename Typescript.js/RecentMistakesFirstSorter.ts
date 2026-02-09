import { Card } from "./Card";
import { CardOrganizer } from "./CardOrganizer";

export class RecentMistakesFirstSorter implements CardOrganizer {
  public organize(cards: Card[]): Card[] {
    const incorrectCards: Card[] = [];
    const correctCards: Card[] = [];

    for (const c of cards) {
      if (c.wasCorrectInLastRound()) {
        correctCards.push(c);
      } else {
        incorrectCards.push(c);
      }
    }

    const reusalt: Card[] = [];
    reusalt.push(...incorrectCards);
    reusalt.push(...correctCards);

    return reusalt;
  }
}

