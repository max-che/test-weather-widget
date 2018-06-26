import { Component, Input} from '@angular/core';
import { Place } from '../../../assets/mocks/places';

@Component({
	selector: '.place-card',
	templateUrl: './place-card.component.html',
	styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
	@Input()
	public place: Place;
}
