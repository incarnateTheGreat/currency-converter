import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { ModalComponent } from './components/modal/modal.component';

import { OnlyNumber } from './components/converter/onlynumber.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
		ModalComponent,
		OnlyNumber
  ],
  imports: [
    BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
