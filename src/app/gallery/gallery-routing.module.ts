import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {
}
