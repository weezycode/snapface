import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  img_url!: string;

  ngOnInit() {
    this.title = 'Canon';
    this.description = 'Devenez meilleur photographe avec cette appareille';
    this.createdAt = new Date();
    this.snaps = 6;
    this.img_url = "/assets/img/cam_left1.jpg";


  }

}
