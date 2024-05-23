import { Post } from './../entity/Post';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostFormComponent} from "../post-form/post-form.component";

@Component({
  selector: 'ichrist-fil-ichrist',
  standalone: true,
  imports: [CommonModule, PostFormComponent],
  templateUrl: './fil-ichrist.component.html',
  styleUrl: './fil-ichrist.component.scss'
})
export class FilIchristComponent implements OnInit {


  listeDePosts!: Post[];


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.listeDePosts = [];
    /*this.listeDePosts = [{id: 1, titre: "Mon Post",
    photo: "https://www.hdwallpapers.in/thumbs/2020/image_jesus_on_cross_with_sunbeam_and_clouds_background_4k_hd_jesus-t2.jpg",
    likes: 0, utilisateur: undefined, commentaires: undefined},
    {id: 1, titre: "Mon Post",
    photo: "https://www.thewowstyle.com/wp-content/uploads/2015/04/04133e9371fc8740e0c3b8d7bda3612afpictures-of-jesus.jpg",
    likes: 0, utilisateur: undefined, commentaires: undefined},
    {id: 1, titre: "Mon Post",
    photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-UcFR8ZfeoKs%2FUxR3tVG0NcI%2FAAAAAAAACpE%2FxeQm4teJ_mc%2Fs1600%2FJesus%2BChrist%2BBible%2Bvideos.jpg&f=1&nofb=1&ipt=cedb32d52586a05095b2cb2e5c1af8f9d66525c99095870a380ae81552cadd09&ipo=images",
    likes: 0, utilisateur: undefined, commentaires: undefined} ]*/
  }

  allerAuFormulaireDePost() {
      this.router.navigate(['creation-post']);
  }

  ajouterPostAuFil($event: Post) {
    this.listeDePosts.push($event);
  }
}
