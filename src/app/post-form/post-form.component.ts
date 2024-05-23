import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Post} from "../entity/Post";
import {Router} from "@angular/router";

@Component({
  selector: 'ichrist-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent implements OnInit {
  @Output() postEmetteur = new EventEmitter();
  postForm!: FormGroup;


  constructor(private _formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initialiserForm();
  }

  enregistrerPost() {
    if (this.postForm.valid) {
        let post = this.creerPostAPartirDuFormulaire();
        this.postEmetteur.emit(post);
        this.cleanFormPost();
    } else {
      console.log('Le formulaire n\'est pas valide...');
    }
  }

  initialiserForm() {
    this.postForm = this._formBuilder.group({
      url: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['']
    });
  }

  creerPostAPartirDuFormulaire(): Post {
    return new Post(1,
      this.postForm.get('titre')?.value,
      this.postForm.get('url')?.value,
      this.postForm.get('description')?.value,
      0);
  }

  cleanFormPost() {
    this.postForm.get('titre')?.setValue('');
      this.postForm.get('url')?.setValue('');
      this.postForm.get('description')?.setValue('');
  }
}
