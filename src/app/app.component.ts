import {Component} from '@angular/core';
import {Place} from '../assets/mocks/places';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title = 'Hot Weather Widget';
	public currentPlace: Place;
}
