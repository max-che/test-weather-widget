import { Component, EventEmitter, Input, Output } from '@angular/core';
import { placeType } from '../../../assets/mocks/places';

@Component({
	selector: '.place-menu',
	templateUrl: './place-menu.component.html',
	styleUrls: ['./place-menu.component.css']
})

export class PlaceMenuComponent {

	@Output()
	public chooseType: EventEmitter<string> = new EventEmitter();

	public chosenType: string = placeType[0];

	public placeTypes() {
		const allKeys = Object.keys(placeType);
		return allKeys.slice(allKeys.length / 2);
	}

	public onChooseType(value: string): void {
		this.chooseType.emit(value);
		this.chosenType = value;
	}
}
