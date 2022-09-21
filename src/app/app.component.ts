import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;

  ngOnInit(): void {

    this.mySnap = new FaceSnap(
      'Canon',
      'Devenez meilleur photographe avec cette appareille',
      new Date(),
      "assets/img/cam_left1.jpg",
      0,
    );
  }
}

