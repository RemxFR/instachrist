import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ichrist-page-connexion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './page-connexion.component.html',
  styleUrl: './page-connexion.component.scss'
})
export class PageConnexionComponent implements OnInit {
  

  connexionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {
    this.initiliserConnexionForm();
  }

  initiliserConnexionForm() {
    this.connexionForm = this.formBuilder.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required]
    });
  }

  seConnecter(){
    if(this.connexionForm.valid) {
      this.router.navigate(['fil-ichrist']);
    } else {
      alert('Identifiants invalides ou manquants');
    }
  }

}
