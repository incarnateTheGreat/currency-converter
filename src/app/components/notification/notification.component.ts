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

	// Clears the Notification Message.
	clearMessage() {
		this.isError = false;
		this.isSuccess = false;
	}

	// Prompts the Error Notification Message.
	error(message) {
		this.isError = true;
		this.notificationMessage = message;
	}

	// Prompts the Success Notification Message.
	success(message) {
		this.isSuccess = true;
		this.notificationMessage = message;
	}

}
