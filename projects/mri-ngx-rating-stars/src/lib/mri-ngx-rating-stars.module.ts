import { NgModule } from '@angular/core';
import { MriNgxRatingStarsComponent } from './mri-ngx-rating-stars.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [MriNgxRatingStarsComponent],
  imports: [
    CommonModule
  ],
  exports: [MriNgxRatingStarsComponent]
})
export class MriNgxRatingStarsModule { }
