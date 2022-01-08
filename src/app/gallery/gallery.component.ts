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

  constructor(
    private galleryService: GalleryService,
    public nasaAPIService: NasaAPIService
  ) {}

  ngOnInit() {
    this.getPhotos();
    this.galleryService.photosChanged.subscribe((photos) => {
      this.photos = photos;
    });
  }

  ngOnDestroy() {}

  getPhotos() {
    this.nasaAPIService.fetchRoverImages().subscribe((response: any) => {
      this.galleryService.setPhotos(response['photos']);
    });
  }

}
