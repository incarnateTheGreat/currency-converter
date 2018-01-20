import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { fx } from 'money';

@Injectable()
export class GetCurrencyDataService {

  constructor(private http: Http) {}

	getInfo() {
		const url = 'https://api.fixer.io/latest';

		return this.http.get(url)
			.map(res => res.json());
  }
}
