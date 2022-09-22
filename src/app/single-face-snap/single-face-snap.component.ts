import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snaps.models';
import { FaceSnapsServices } from '../sevices/face-snaps.services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;


  buttonText!: string;
  constructor(private faceSnapServices: FaceSnapsServices,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = "Oh Snap!";

    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapServices.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === "Oh Snap!") {
      this.faceSnapServices.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "UnSnap";
    } else {
      this.faceSnapServices.snapFaceSnapById(this.faceSnap.id, 'unSnap');
      this.buttonText = "Oh Snap!";
    }


  }
}
