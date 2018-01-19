import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
	isModalOpen:boolean = false;

  ngOnInit() {}

	closeModal() {
		this.isModalOpen = false;
	}
}
