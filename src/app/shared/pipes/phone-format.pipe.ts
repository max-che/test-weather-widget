import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

	transform(value: number, args?: string): string {
		const p = value.toString();
		return `+${p[0]} ${p.substring(1, 4)} ${p.substring(4, 7)}-${p.substring(7, 9)}-${p.substring(9, 11)}`;
	}

}
