import { Component, Input} from '@angular/core';
import { Place } from '../../assets/mocks/places';

@Component({
	selector: '.place-details',
	templateUrl: './place-details.component.html',
	styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent {
	@Input()
	public place: Place;

}
