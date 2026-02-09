package Java;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Card> cards = new ArrayList<>();

        cards.add(new Card(" What is OOP", true));
        cards.add(new Card("Define Loop", false));
        cards.add(new Card(" What is SQL", true));
        cards.add(new Card("What is Array?", false));
        cards.add(new Card("Define is HTML?", true));

        System.out.println("Before Order :");
        for (Card c : cards) System.out.println(c);

        CardOrganizer organizer = new RecentMistakesFirstSorter();
        List<Card> sorted = organizer.organize(cards);

        System.out.println("\nAfter Order the answer :");
        for (Card c : sorted) System.out.println(c);
    }
}

