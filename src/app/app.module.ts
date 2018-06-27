import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceMenuComponent } from './place-list/place-menu/place-menu.component';
import { FilterPlacesByTypePipe } from './shared/pipes/filter-places-by-type.pipe';
import { PlaceCardComponent } from './place-list/place-card/place-card.component';
import { PhoneFormatPipe } from './shared/pipes/phone-format.pipe';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TimeoutInterceptor } from './shared/services/timeout-interceptor.service';

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
		BrowserModule,
		HttpClientModule
	],
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: TimeoutInterceptor,
		multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule {
}
