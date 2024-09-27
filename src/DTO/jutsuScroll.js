class CreateJutsuScroll{
    constructor({nom, createur,	rang, quantite, description, categorie, techniques_associees}){
        this.nom = nom;
        this.createur = createur;
        this.rang = rang;
        this.quantite = quantite;
        this.description = description;
        this.categorie = categorie;
        this.techniques_associees = techniques_associees;
    }

    validator(){
        let error = []
        if(!this.nom || typeof this.nom !== 'string'){
            error.push('Le nom ne peux pas etre vide ou doit etres une chaine de caractère')
        }

        if(!this.description || typeof this.description !== 'string'){
            error.push('La description ne peux pas etre vide ou doit etres un chiffre')
        }
    }
}