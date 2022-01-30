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
export class AppModule { }
