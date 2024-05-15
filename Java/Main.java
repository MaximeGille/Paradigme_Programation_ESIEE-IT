import java.util.ArrayList;
import java.util.Date;

public class Main {
  public static void main(String[] args) {

    ArrayList<Personne> personne = new ArrayList<>(); 

    Membre Léa = new Membre("Léa", "Robillard", 0, new Date(), "Membre");
    Membre Maxime = new Membre("Maxime", "Gille", 1, new Date(), "Membre");

    Personne Céline = new Employe("Céline", "Robillard", 2, "Bibilothécaire", 30000.0);
    Personne Eléonore = new Employe("Eléonore", "Brays", 3, "Bibilothécaire", 35000.0);

    personne.add(Léa);
    personne.add(Maxime);
    personne.add(Céline);
    personne.add(Eléonore);

    ArrayList<Livre> livres = new ArrayList<>();

    Livre manga1 = new Livre("Naruto", "Masashi Kishimoto", "17654", true);
    Livre manga2 = new Livre("One Piece", "Eiichirō Oda", "136443", true);
    Livre manga3 = new Livre("Jujutsu Kaisen", "Gege Akutami", "13242", false);
    Livre manga4 = new Livre("Bleach", "Tite Kubo", "14", false);
    Livre manga5 = new Livre("My Hero Academia", "Kōhei Horikoshi", "1534", true);

    livres.add(manga1);
    livres.add(manga2);
    livres.add(manga3);
    livres.add(manga4);
    livres.add(manga5);

    Maxime.emprunter(livres.get(1));
  
    Maxime.afficherDetails();

    Maxime.retourner(manga1);

    Eléonore.afficherDetails();
    
    
  }
}