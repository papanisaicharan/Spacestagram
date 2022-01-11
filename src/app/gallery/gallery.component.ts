import { Component, OnInit } from '@angular/core';
import { NasaAPIService } from '../shared-module/nasaAPIService';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photos: any;
  photosLength: number = 0;

  constructor(
    private galleryService: GalleryService,
    public nasaAPIService: NasaAPIService
  ) {}

  ngOnInit() {
    this.galleryService.photosChanged.subscribe((photos) => {
      this.photos = photos;
      this.photosLength = photos.length;
    });
  }

  ngOnDestroy() {}

  getPhotos(dateq: string) {
    this.nasaAPIService.fetchRoverImages(dateq).subscribe((response: any) => {
      this.galleryService.setPhotos(response['photos']);
    });
  }

}
