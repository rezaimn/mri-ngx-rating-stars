import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MriNgxRatingStarsModule} from '../../projects/mri-ngx-rating-stars/src/lib/mri-ngx-rating-stars.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MriNgxRatingStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
