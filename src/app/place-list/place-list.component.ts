import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Place, places$, placeType } from '../../assets/mocks/places';
import { T } from '@angular/core/src/render3';

@Component({
	selector: '.place-list',
	templateUrl: './place-list.component.html',
	styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent {

	public places$: Observable<Place[]> = places$;

	public currentType: string = placeType[0];

	public placeTypes() {
		const allKeys = Object.keys(placeType);
		return allKeys.slice(allKeys.length / 2);
	}
}
