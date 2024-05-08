import { Utilisateur } from "./Utilisateur";

export class Commentaire {
    private id:number;
    private commentaireTexte:string;
    private likes:number;
    private utilisateur:Utilisateur;

    constructor(_id:number, _commentaireTexte:string, _likes:number, 
        _utilisateur:Utilisateur) {
        this.id=_id;
        this.commentaireTexte=_commentaireTexte;
        this.likes=_likes;
        this.utilisateur=_utilisateur;
    }
}