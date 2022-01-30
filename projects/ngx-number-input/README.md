# NgxNumberInput

A simple directive designed to handle number inputs. This directive will only allow users to input both positive and negative numbers. You can use this with Template/Reactive forms or as a view only field which does not require change in value.

## Example/Demo

Possible examples that can be achieved by this directive:
* 111
* 111.11
* 111.
* +111
* +111.11
* -111
* -111.11

Demo for this directive can be found in this [Stackblitz](https://stackblitz.com/edit/ngx-number-input-example?file=src/app/app.component.ts) example.

## Installation
`npm i ngx-number-input`
NPM Package: [ngx-number-input](https://www.npmjs.com/package/ngx-number-input)

## Usage
1. Register the `NgxNumberInputModule` in your app/custom module where required.
 > `import { NgxNumberInputModule } from 'ngx-number-input'`
 ```typescript
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { BrowserModule } from '@angular/platform-browser';
 import { NgxNumberInputModule } from 'ngx-number-input';
 import { AppComponent } from './app.component';

 @NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, FormsModule, NgxNumberInputModule],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule {}
 ```

2. Use the directive `ngxNumberInput` in your component HTML.
 ```<input type="text" ngxNumberInput="7.3" [(ngModel)]="sample" />```
 Notice the value passed in the directive. This signifies the number of digits required before decimal point and after decimal point.
 For this example, "7.3" signifies 7 digits before decimal point and 3 digits after decimal points.
 If no decimal point is required specify "0" after the point. e.g: `ngxNumberInput="1.0"`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:{PORT}/`. The app will automatically reload if you change any of the source files.

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->
## Credits
This project is based on [NgxNumberInput](https://github.com/barefacedbear/NgxNumberInput). I want to thank [Sanjiv Kumar](https://indepth.dev/authors/1053/sanjiv) for writing this [article](https://indepth.dev/posts/1238/complete-beginner-guide-to-publishing-an-angular-library-to-npm) which helped me to write this. Also want to thanks entire [Angular](https://angular.io) team for creating this awesome framework.
