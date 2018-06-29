import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Place, placeType, placeTypesArray } from '../../assets/mocks/places';
import { PlacesService } from '../shared/services/places.service';

@Component({
	selector: '.place-list',
	templateUrl: './place-list.component.html',
	styleUrls: ['./place-list.component.css']
})

export class PlaceListComponent implements OnInit {

	@Output()
	public currentPlaceChange: EventEmitter<Place> = new EventEmitter();

	public allPlaces: Place[];
	public currentPlace: Place;
	public placeTypes: string[] = placeTypesArray;
	public currentType: string = this.placeTypes[0];

	public title = 'Righteous indignation & like';

	public onChoseType(type: string, places: Place[]): void {
		this.currentType = type;
		this.selectFirstPlace(places);
	}

	private selectFirstPlace(places: Place[]) {
		this.changeCurrentPlace(places
			.filter(place => place.type === placeType[this.currentType])[0]);
	}

	public changeCurrentPlace(place: Place): void {
		this.currentPlace = place;
		this.currentPlaceChange.emit(place);
	}

	constructor(private PlaceService: PlacesService) {}

	public ngOnInit() {
		this.PlaceService.getAll().subscribe((places: Place[]) => {
			this.allPlaces = places;
			this.selectFirstPlace(places);
		});

	}
}
