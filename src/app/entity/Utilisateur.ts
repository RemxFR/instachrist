import { Commentaire } from "./Commentaire";
import { Post } from "./Post";

export class Utilisateur {
    
    private login: string;
    private mdp:string;
    private mail: string;
    private posts?: Post[] | undefined;
    private commentaires?: Commentaire[] | undefined;

    constructor( login: string, mdp:string, mail: string, 
        posts?: Post[], commentaires?: Commentaire[]) {
            this.login = login;
            this.mdp = mdp;
            this.mail = mail;
        }
    
}