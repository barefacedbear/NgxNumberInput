import { Component } from '@angular/core';

@Component({
  selector: 'ngx-num-root',
  template: `<input type="text" ngxNumberInput="7.3" [(ngModel)]="sample" /><br>{{sample}}`
})
export class AppComponent {
  title = 'NgxNumberInputLibrary';
  sample = 0;
}
