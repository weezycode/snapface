import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private faceSnapServices: FaceSnapsServices,
    private router: Router) { }

  ngOnInit() {
    this.buttonText = "Oh Snap!";

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

  onViewFaceSnap() {
    this.router.navigateByUrl(`dronesnaps/${this.faceSnap.id}`);
  }
}
