"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentMistakesFirstSorter = void 0;
var RecentMistakesFirstSorter = /** @class */ (function () {
    function RecentMistakesFirstSorter() {
    }
    RecentMistakesFirstSorter.prototype.organize = function (cards) {
        var incorrectCards = [];
        var correctCards = [];
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var c = cards_1[_i];
            if (c.wasCorrectInLastRound()) {
                correctCards.push(c);
            }
            else {
                incorrectCards.push(c);
            }
        }
        var reusalt = [];
        reusalt.push.apply(reusalt, incorrectCards);
        reusalt.push.apply(reusalt, correctCards);
        return reusalt;
    };
    return RecentMistakesFirstSorter;
}());
exports.RecentMistakesFirstSorter = RecentMistakesFirstSorter;
