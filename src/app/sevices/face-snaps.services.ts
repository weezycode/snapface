import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps.models";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsServices {

    mySnap: FaceSnap[] = [
        {
            id: 5,
            title: 'Canon le meilleur',
            description: 'Devenez meilleur photographe avec cette appareille',
            createdAt: new Date(),
            snaps: 30,
            img_url: "/assets/img/cam_left1.jpg",
        },
        {
            id: 7,
            title: 'Voiture',
            description: 'La plus belle voiture tout électrique',
            createdAt: new Date(),
            snaps: 10,
            img_url: "/assets/img/auto.jpg",
            location: "Allemagne",
        },
        {
            id: 8,
            title: 'Ordinateur',
            description: 'Surfez plus vite et travaillez en un clic',
            createdAt: new Date(),
            snaps: 50,
            img_url: "/assets/img/laptop.jpg",
            location: "France",
        },
        {
            id: 9,
            title: 'L\'heure est venue',
            description: 'Le temps compte pour vous soyez agile',
            createdAt: new Date(),
            snaps: 100,
            img_url: "/assets/img/watch.jpg",
            location: "Suisse",
        },
        {
            id: 15,
            title: 'Le moment est important',
            description: 'Capturez des moments unique jusqu\'à 500 FPS',
            createdAt: new Date(),
            snaps: 130,
            img_url: "/assets/img/vid.jpg",
        }

    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.mySnap;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.mySnap.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('Not found faceSnap !');
        } else {
            return faceSnap;
        }
    }

    getOneFaceSnapById(): FaceSnap {
        const faceSnap = this.mySnap.find(faceSnap => faceSnap.id);
        if (!faceSnap) {
            throw new Error('Not found faceSnap !');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unSnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }


}