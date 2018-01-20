import { Component, OnInit, ViewChild } from '@angular/core';

import { fx } from 'money';
import _ from 'lodash';

// Services
import { GetCurrencyDataService } from '../../services/get-currency-data.service';

@Component({
  selector: 'component-converter',
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
	dataServiceObj:object;

	// Channel child components.
	@ViewChild('modal') modalChild;
	@ViewChild('notification') notificationChild;

	constructor(private dataService: GetCurrencyDataService) { }

  ngOnInit() {
		// TODO: Improve service by putting result in a store.

		// Run service to the latest Currency Data.
		this.dataService.getInfo().subscribe((data) => {
			this.dataServiceObj = data;
			fx.rates = data.rates;
		}, error => this.notificationChild.error('Sorry. There was a problem with your request.'))
	}

	convertCurrency() {
		this.notificationChild.clearMessage();

		if (_.isEmpty(this.initial_value)) {
			this.converted_value = null;
			return false;
		}

		if (this.initial_value > 0) {
			this.isError = false;

			// Compare the two currencies to get the converted amount.
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

	// Opens the Disclaimer modal.
	openDisclaimer() {
		this.modalChild.isModalOpen = !this.modalChild.isModalOpen;
		this.modalChild.getContent(this.dataServiceObj);
	}
}
