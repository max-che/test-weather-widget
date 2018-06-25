import { Pipe, PipeTransform } from '@angular/core';
import { Place, placeType } from '../../../assets/mocks/places';

@Pipe({
	name: 'filterPlacesByType'
})
export class FilterPlacesByTypePipe implements PipeTransform {

	transform(places: Place[], type: string): Place[] {
		return places.filter(place => place.type === placeType[type]);
	}
}
