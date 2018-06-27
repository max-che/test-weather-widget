export enum placeType {
	Hotel = 0,
	Fishing = 1,
	Tours = 2,
	Weather = 3,
}

export const placeTypesArray = Object.keys(placeType).slice(Object.keys(placeType).length / 2);

export interface Weather {
	title: string;
	icon: string;
	water: number;
	temperature: number;
}

export interface Social {
	title: string;
	img: string;
	followers: number;
	following: number;
}

export interface Place {
	address: string;
	full_address: string;
	img: string;
	phone: number;
	preview: string[];
	description: string;
	weather: Weather;
	social_info: Social;
	type: placeType;
}
