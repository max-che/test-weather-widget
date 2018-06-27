import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PlacesService {
	constructor(private http: HttpClient) {}

	public getAll() {
		return this.http.get('./assets/mocks/users.json');
	}
}
