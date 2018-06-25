import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { EnumToArrayPipe } from './shared/pipes/enum-to-array.pipe';
import { PlaceMenuComponent } from './place-list/place-menu/place-menu.component';
import { FilterPlacesByTypePipe } from './shared/pipes/filter-places-by-type.pipe';
import { PlaceCardComponent } from './place-list/place-card/place-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    EnumToArrayPipe,
    PlaceMenuComponent,
    FilterPlacesByTypePipe,
    PlaceCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
