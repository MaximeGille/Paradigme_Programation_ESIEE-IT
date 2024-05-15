import java.util.Date;

public class Membre extends Personne {
    private Date dateAdhesion;
    private String statut;

    public Membre(String nom, String prenom, int id, Date dateAdhesion, String statut) {
        super(nom, prenom, id);
        this.dateAdhesion = dateAdhesion;
        this.statut = statut;
    }


    public Date getDateAdhesion() {
        return dateAdhesion;
    }

    public void setDateAdhesion(Date dateAdhesion) {
        this.dateAdhesion = dateAdhesion;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }


        public void afficherDetails() {
            System.out.println("Nom: " + getNom());
            System.out.println("Prénom: " + getPrenom());
            System.out.println("ID: " + getId());
            System.out.println("Date d'adhésion: " + dateAdhesion.toString());
            System.out.println("Statut: " + statut);
        }
    }