import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
	isError:boolean = false;
	isSuccess:boolean = false;
	notificationMessage:string = "";

  constructor() { }

  ngOnInit() { }

	clearMessage() {
		this.isError = false;
		this.isSuccess = false;
	}
	error(message) {
		this.isError = true;
		this.notificationMessage = message;
	}
	success(message) {
		this.isSuccess = true;
		this.notificationMessage = message;
	}

}
