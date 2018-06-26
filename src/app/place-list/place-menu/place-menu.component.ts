import { Component, EventEmitter, Output } from '@angular/core';
import { placeTypesArray } from '../../../assets/mocks/places';

@Component({
	selector: '.place-menu',
	templateUrl: './place-menu.component.html',
	styleUrls: ['./place-menu.component.css']
})

export class PlaceMenuComponent {

	@Output()
	public chooseType: EventEmitter<string> = new EventEmitter();

	public placeTypes: string[] = placeTypesArray;
	public chosenType: string = this.placeTypes[0];

	public onChooseType(value: string): void {
		this.chooseType.emit(value);
		this.chosenType = value;
	}
}
