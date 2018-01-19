import { Component, OnInit, ViewChild } from '@angular/core';

import { fx } from 'money';
import _ from 'lodash';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
	currencies:string[] = ["CAD", "USD", "EUR"];
	initial_value:number = null;
	initial_currency:string = this.currencies[0];
	converted_value:number = null;
	converted_currency:string = this.currencies[1];
	isError:boolean = false;
	errorMessage:string = "";

	@ViewChild("modal") child;

  ngOnInit() {}

	convertCurrency() {
		


		if (_.isEmpty(this.initial_value)) {
			this.converted_value = null;
			return false;
		}

		if (this.initial_value > 0) {
			this.isError = false;

			const getConversion = () => {
				const rate = fx(this.initial_value).
										 from(this.initial_currency).
										 to(this.converted_currency);

				this.converted_value = rate.toFixed(2);
			}

			fetch("https://api.fixer.io/latest")
				.then((resp) => resp.json())
				.then((data) => fx.rates = data.rates)
				.then(getConversion)
				.catch(() => {
					this.errorMessage = "Sorry. There was a problem with your request. Please try again later.";
					this.isError = true;
				})
		} else {
			this.converted_value = 0;
			this.isError = true;
		}
	}

	openDisclaimer() {
		this.child.isModalOpen = !this.child.isModalOpen;
	}
}
