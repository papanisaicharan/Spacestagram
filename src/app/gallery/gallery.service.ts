import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photo } from '../shared-module/models/photo.model';

@Injectable({ providedIn: 'root' })
export class GalleryService {
  photosChanged = new Subject<Photo[]>();
  photosLiked = new Subject<Object[]>();

  private photos: Photo[] = [];

  constructor() {}

  // setter
  setPhotos(photos: Photo[]) {
    this.photos = photos;
    // sending the copy to all subscribers
    this.photosChanged.next(this.photos.slice());
  }

  // getter
  getPhotos() {
    return this.photos.slice();
  }

  // returning a particular photo based on index
  getPhoto(index: number) {
    return this.photos[index];
  }
}
