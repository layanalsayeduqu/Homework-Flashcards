"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var RecentMistakesFirstSorter_1 = require("./RecentMistakesFirstSorter");
var cards = [];
cards.push(new Card_1.Card("What is OOP", true));
cards.push(new Card_1.Card("Define Loop", true));
cards.push(new Card_1.Card("What is SQL", false));
cards.push(new Card_1.Card("What is Array?", true));
cards.push(new Card_1.Card("Define is HTML?", false));
console.log("Before Order:");
for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
    var c = cards_1[_i];
    console.log(c.toString());
}
var organizer = new RecentMistakesFirstSorter_1.RecentMistakesFirstSorter();
var sorted = organizer.organize(cards);
console.log("\nAfter Order the answer:");
for (var _a = 0, sorted_1 = sorted; _a < sorted_1.length; _a++) {
    var c = sorted_1[_a];
    console.log(c.toString());
}
