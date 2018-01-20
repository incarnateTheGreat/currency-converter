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


				// let keys = Object.keys(value),
				// 		values = Object.values(value);
				//
				// 		// console.log("keys:", keys);
				// 		console.log("values:", values);
				// // keys.map((k) => {
				// // 	console.log(`${k}: ${value[k]}`);
				// // })
				//
				// // console.log([keys, value]);
				//
				// return [keys, value];
			}
    }
}
