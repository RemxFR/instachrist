import {Routes} from '@angular/router';
import {PageInscriptionComponent} from './page-inscription/page-inscription.component';
import {PageConnexionComponent} from './page-connexion/page-connexion.component';
import {FilIchristComponent} from './fil-ichrist/fil-ichrist.component';
import {PostFormComponent} from "./post-form/post-form.component";

export const routes: Routes = [
  {path: '', component: PageConnexionComponent},
  {path: 'connexion', component: PageConnexionComponent},
  {path: 'inscription', component: PageInscriptionComponent},
  {path: 'fil-ichrist', component: FilIchristComponent},
  {path: 'creation-post', component: PostFormComponent}
];
