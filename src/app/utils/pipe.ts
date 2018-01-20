import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
	transform(value: any, args?: any[]): any[] {
		if (value) {
			let keys = [];

			for (let key in value) {
				keys.push({key: key, value: value[key]});
			}

			return keys;
		}
	}
}
