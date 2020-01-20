# MriNgxRatingStars

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

This library src is available on [GitHub](https://github.com/rezaimn/mri-ngx-rating-stars).

## Installing

     npm i mri-ngx-rating-stars --save

## Quickstart
Import mri-ngx-rating-stars module in Angular app.

```sh 
     import {MriNgxRatingStarsModule} from 'mri-ngx-rating-stars';

     @NgModule({
       (...)
       imports: [
         MriNgxRatingStarsModule
       ]
       (...)
     })
```

##Usage

```sh
        <mri-ngx-rating-stars
          [fontSize]="'40px'"
          [rate]="4"
          [activeColor]="'orange'"
          disabled="false"
          (rateSet)="rateSet()"
        ></mri-ngx-rating-stars>
```

##Guide
###Inputs
| input | type | description |
| ------ | ------ | ------ |
| fontSize | string | it sets the stars size
| rate | number | it sets the active stars it should be ( 0 - 5 )
| activeColor | string | it sets the activated stars color
| disabled | boolean | it allows you to change the rating by click on the stars if sets to true

###Outputs
| output | type | description |
| ------ | ------ | ------ |
| rateSet | number | it returns the star number you clicked to set ( 0 - 5 ).to set the 0 rating there is a transparent star provided on the left side of the first star and you can click on that.


Run `ng generate component component-name --project mri-ngx-rating-stars` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project mri-ngx-rating-stars`.
> Note: Don't forget to add `--project mri-ngx-rating-stars` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build mri-ngx-rating-stars` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build mri-ngx-rating-stars`, go to the dist folder `cd dist/mri-ngx-rating-stars` and run `npm publish`.

## Running unit tests

Run `ng test mri-ngx-rating-stars` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
