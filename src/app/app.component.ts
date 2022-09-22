import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap[];

  ngOnInit(): void {

    this.mySnap = [
      {
        title: 'Canon le meilleur',
        description: 'Devenez meilleur photographe avec cette appareille',
        createdAt: new Date(),
        snaps: 0,
        img_url: "/assets/img/cam_left1.jpg",
      },
      {
        title: 'Voiture',
        description: 'La plus belle voiture tout électrique',
        createdAt: new Date(),
        snaps: 0,
        img_url: "/assets/img/auto.jpg",
        location: "Allemagne",
      }
    ]
  }
}

