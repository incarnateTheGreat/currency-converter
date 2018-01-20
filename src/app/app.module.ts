// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotificationComponent } from './components/notification/notification.component';

// Utilities
import { ValuesPipe } from './utils/pipe';

// Directives
import { OnlyNumber } from './components/converter/onlynumber.directive';

// Services
import { GetCurrencyDataService } from './services/get-currency-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
		ModalComponent,
		OnlyNumber,
		NotificationComponent,
		ValuesPipe
  ],
  imports: [
    BrowserModule,
		HttpModule,
		FormsModule
  ],
  providers: [GetCurrencyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
