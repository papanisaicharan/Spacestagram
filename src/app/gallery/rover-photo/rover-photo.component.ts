import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/shared-module/models/photo.model';

@Component({
  selector: 'app-rover-photo',
  templateUrl: './rover-photo.component.html',
  styleUrls: ['./rover-photo.component.scss']
})
export class RoverPhotoComponent implements OnInit {

  @Input() photo: any;

  ngOnInit() {
    console.log(this.photo);
  }

  alterLike() {
    this.photo.liked = !this.photo.liked;
    console.log(this.photo.liked);
  }

  constructor() { }

}
