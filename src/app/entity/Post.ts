import { Utilisateur } from './Utilisateur';
import { Commentaire } from "./Commentaire";

export class Post {

    public id:number;
    public titre:string;
    public photo:string;
    public description;
    public likes:number;
    public utilisateur:Utilisateur | undefined;
    public commentaires: Commentaire[] | undefined;



    constructor(_id:number, _titre:string, _photo:string, _description: string, _likes:number,
        _utilisateur?:Utilisateur, _commentaires?: Commentaire[]) {
        this.id=_id;
        this.titre=_titre;
        this.photo=_photo;
        this.description = _description;
        this.likes=_likes;
        //this.utilisateur=_utilisateur;
    }
}
