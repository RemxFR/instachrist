import { Utilisateur } from './Utilisateur';
import { Commentaire } from "./Commentaire";

export class Post {

    private id:number;
    private titre:string;
    private photo:string;
    private likes:number;
    private utilisateur:Utilisateur;
    private commentaires: Commentaire[] | undefined;
    


    constructor(_id:number, _titre:string, _photo:string, _likes:number, 
        _utilisateur:Utilisateur, _commentaires?: Commentaire[]) {
        this.id=_id;
        this.titre=_titre;
        this.photo=_photo;
        this.likes=_likes;
        this.utilisateur=_utilisateur;
    }
}