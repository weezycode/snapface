import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';
import { FaceSnapsServices } from '../sevices/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  mySnap!: FaceSnap[];

  constructor(private faceSnapServices: FaceSnapsServices) { }

  ngOnInit(): void {

    this.mySnap = this.faceSnapServices.getAllFaceSnaps();
  }

}
