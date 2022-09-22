import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';
import { FaceSnapsServices } from '../sevices/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;


  buttonText!: string;
  constructor(private faceSnapServices: FaceSnapsServices) { }

  ngOnInit() {
    this.buttonText = "Oh Snap!";

  }

  onSnap() {
    if (this.buttonText === "Oh Snap!") {
      this.faceSnapServices.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = "UnSnap";
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!";
    }


  }
}
