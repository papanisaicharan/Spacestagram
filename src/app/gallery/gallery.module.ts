import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { GalleryComponent } from './gallery.component';
import { RoverPhotoComponent } from './rover-photo/rover-photo.component';
import { FilterComponent } from './filter/filter.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    GalleryComponent,
    RoverPhotoComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe
  ]
})
export class GalleryModule { }
