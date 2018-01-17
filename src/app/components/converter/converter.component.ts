import { Component, OnInit } from '@angular/core';

import { fx } from 'money';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
	initial_value:number;
	initial_currency:string;
	converted_value:number;
	converted_currency:string;
	currencies:string[];

  constructor() {
		this.currencies = ["CAD", "USD", "EUR"];
		this.initial_value = null;
		this.initial_currency = this.currencies[0];
		this.converted_value = null;
		this.converted_currency = this.currencies[1];
	}

  ngOnInit() {}

	myEvent(value) {
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
}
