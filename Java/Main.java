import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<Personne> personnes = new ArrayList<>();
        personnes.add(new Employe("Brays", "Eléonore", 1, "Bibliothécaire", 45000.00));
        personnes.add(new Membre("Gille", "Maxime", 2, new Date(), "Membre actif" ));

        for (Personne personne : personnes) {
            personne.afficherDetails();
            System.out.println(); 
        }
    }
}

