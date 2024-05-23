import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'ichrist-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'instachrist';
}
