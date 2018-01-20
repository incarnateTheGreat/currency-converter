import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	isModalOpen:boolean = false;
	content:string;
	baseCurrency:string;
	date:string;
	filterSearch:string;

  ngOnInit() {}

	closeModal() {
		this.isModalOpen = false;
	}

	getContent(currencyObj) {
		this.date = currencyObj.date;
		this.baseCurrency = currencyObj.base;
		this.content = currencyObj.rates;
	}
}
