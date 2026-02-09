"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(content, wascorrect) {
        this.content = content;
        this.wascorrect = wascorrect;
    }
    Card.prototype.getcontent = function () {
        return this.content;
    };
    Card.prototype.wasCorrectInLastRound = function () {
        return this.wascorrect;
    };
    Card.prototype.toString = function () {
        return this.content;
    };
    return Card;
}());
exports.Card = Card;
