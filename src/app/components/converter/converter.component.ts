import { Component, OnInit, ViewChild } from '@angular/core';

import { fx } from 'money';

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

	@ViewChild("modal") child;

  ngOnInit() {}

	convertCurrency(value) {
		if (this.initial_value > 0) {
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
		} else {
			this.converted_value = 0;
		}
	}

	openDisclaimer() {
		this.child.isModalOpen = !this.child.isModalOpen;
	}
}
