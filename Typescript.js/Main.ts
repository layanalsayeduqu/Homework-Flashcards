import { Card } from "./Card";
import { CardOrganizer } from "./CardOrganizer";
import { RecentMistakesFirstSorter } from "./RecentMistakesFirstSorter";

const cards: Card[] = [];

cards.push(new Card(" What is OOP", true));
cards.push(new Card("Define Loop", true));
cards.push(new Card("What is SQL", false));
cards.push(new Card("What is Array?", true));
cards.push(new Card("Define is HTML?", false));

console.log("Before Order:");
for (const c of cards) {
  console.log(c.toString());
}

const organizer: CardOrganizer = new RecentMistakesFirstSorter();
const sorted = organizer.organize(cards);

console.log("\nAfter Order the answer:");
for (const c of sorted) {
  console.log(c.toString());
}
