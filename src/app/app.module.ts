import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceMenuComponent } from './place-list/place-menu/place-menu.component';
import { FilterPlacesByTypePipe } from './shared/pipes/filter-places-by-type.pipe';
import { PlaceCardComponent } from './place-list/place-card/place-card.component';
import { PhoneFormatPipe } from './shared/pipes/phone-format.pipe';
import { PlaceDetailsComponent } from './place-details/place-details.component';

@NgModule({
	declarations: [
		AppComponent,
		PlaceListComponent,
		PlaceMenuComponent,
		FilterPlacesByTypePipe,
		PlaceCardComponent,
		PhoneFormatPipe,
		PlaceDetailsComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
