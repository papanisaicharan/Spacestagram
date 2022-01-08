import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { GalleryComponent } from './gallery.component';
import { RoverPhotoComponent } from './rover-photo/rover-photo.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    GalleryComponent,
    RoverPhotoComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModuleModule
  ]
})
export class GalleryModule { }
