 export class Card {
  private content: string;
  private wascorrect: boolean;

  constructor(content: string, wascorrect: boolean) {
    this.content = content;
    this.wascorrect = wascorrect;
  }

  getcontent(): string {
    return this.content;
  }

  wasCorrectInLastRound(): boolean {
    return this.wascorrect;
  }
   toString(): string {
    return this.content + " (" + this.wasCorrectInLastRound() + ")";
}

  }

