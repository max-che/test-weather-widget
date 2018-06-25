import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

	transform(value: {}) {
		const allKeys = Object.keys(value);
		return allKeys.slice(allKeys.length / 2);
	}

}
