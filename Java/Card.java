package Java;

public class Card {

    private String content;
    private boolean wascorrect;

    public Card(String cardText, boolean wascorrect) {
        this.content = cardText;   
        this.wascorrect = wascorrect;
    }

    public boolean wascorrectInLastRound() {
        return wascorrect;
    }

    public String getCardText() {
        return content;
    }

    @Override
    public String toString() {
        return content + "  ("+ wascorrectInLastRound()+ ")" ;
    }
}


