import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NoResultsComponent } from './no-results/no-results.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, NoResultsComponent],
  exports: [LoadingSpinnerComponent, NoResultsComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
