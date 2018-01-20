import { Component, OnInit, ViewChild } from '@angular/core';

import { fx } from 'money';
import _ from 'lodash';

// Services
import { GetCurrencyDataService } from '../../services/get-currency-data.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
	currencies:string[] = ['CAD', 'USD', 'EUR'];
	initial_value:number = null;
	initial_currency:string = this.currencies[0];
	converted_value:number = null;
	converted_currency:string = this.currencies[1];
	isError:boolean = false;
	errorMessage:string = '';

	@ViewChild('modal') modalChild;
	@ViewChild('notification') notificationChild;

	constructor(private dataService: GetCurrencyDataService) { }

  ngOnInit() {
		this.dataService.getInfo().subscribe((data) => {
      fx.rates = data.rates;
    },
    error => this.notificationChild.error('Sorry. There was a problem with your request.'))
	}

	convertCurrency() {
		this.notificationChild.clearMessage();

		if (_.isEmpty(this.initial_value)) {
			this.converted_value = null;
			return false;
		}

		if (this.initial_value > 0) {
			this.isError = false;

			try {
				const rate = fx(this.initial_value).
										 from(this.initial_currency).
										 to(this.converted_currency);

				this.converted_value = rate.toFixed(2);
			} catch(e) {
				this.notificationChild.error('There was a problem getting currency data. Please try again later.');
			}
		} else {
			this.converted_value = 0;
			this.isError = true;
		}
	}

	openDisclaimer() {
		this.modalChild.isModalOpen = !this.modalChild.isModalOpen;
	}
}
