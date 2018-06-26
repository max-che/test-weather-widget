import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

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
	img: string;
	phone: number;
	preview: string[];
	description: string;
	weather: Weather;
	social_info: Social;
	type: placeType;
}

const places: Place[] = [
	{
		'address': 'Bridgewater, Kula',
		'img': 'http://placehold.it/382x229/ff8091?text=Bridgewater, Kula',
		'phone': 16741096066,
		'description': 'proident adipisicing incididunt fugiat',
		'preview': [
			'http://placehold.it/50/995590?text=A'
		],
		'weather': {
			'title': 'enim tempor exercitation',
			'icon': 'cloudy.png',
			'water': 11,
			'temperature': 21
		},
		'social_info': {
			'title': 'Sest_eiusmod',
			'img': 'http://placehold.it/100/1c149c?text=BigPic',
			'followers': 102,
			'following': 153
		},
		'type': 0
	},
	{
		'address': 'Lancaster, Centerville',
		'img': 'http://placehold.it/382x229/ffa985?text=Lancaster, Centerville',
		'phone': 12412774157,
		'description': 'esse consectetur cupidatat cupidatat duis',
		'preview': [
			'http://placehold.it/50/3acc71?text=C',
			'http://placehold.it/50/deaff9?text=D'
		],
		'weather': {
			'title': 'dolor pariatur adipisicing',
			'icon': 'cloudy.png',
			'water': 19,
			'temperature': 21
		},
		'social_info': {
			'title': 'Aad_&_eiusmod',
			'img': 'http://placehold.it/100/692385?text=BigPic',
			'followers': 20,
			'following': 74
		},
		'type': 3
	},
	{
		'address': 'Montgomery, Hannasville',
		'img': 'http://placehold.it/382x229/c7fffd?text=Montgomery, Hannasville',
		'phone': 19465440213,
		'description': 'adipisicing ut sit et nulla',
		'preview': [
			'http://placehold.it/50/8ad7eb?text=A'
		],
		'weather': {
			'title': 'amet veniam minim',
			'icon': 'cloudy.png',
			'water': 20,
			'temperature': 38
		},
		'social_info': {
			'title': 'Cvelit_tempor',
			'img': 'http://placehold.it/100/bc11f0?text=BigPic',
			'followers': 109,
			'following': 83
		},
		'type': 1
	},
	{
		'address': 'Knickerbocker, Marbury',
		'img': 'http://placehold.it/382x229/94fff5?text=Knickerbocker, Marbury',
		'phone': 16968441259,
		'description': 'dolor non do irure amet',
		'preview': [
			'http://placehold.it/50/29711b?text=L'
		],
		'weather': {
			'title': 'sit ut eiusmod',
			'icon': 'cloudy.png',
			'water': 24,
			'temperature': 25
		},
		'social_info': {
			'title': 'Dmagna aka esse',
			'img': 'http://placehold.it/100/9731f4?text=BigPic',
			'followers': 46,
			'following': 170
		},
		'type': 2
	},
	{
		'address': 'Banner, Allentown',
		'img': 'http://placehold.it/382x229/a8a9ff?text=Banner, Allentown',
		'phone': 17570752170,
		'description': 'proident est irure irure aute',
		'preview': [
			'http://placehold.it/50/5fddbe?text=C'
		],
		'weather': {
			'title': 'laborum id consectetur',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 19
		},
		'social_info': {
			'title': 'Cea_voluptate',
			'img': 'http://placehold.it/100/9ef7ca?text=BigPic',
			'followers': 35,
			'following': 184
		},
		'type': 3
	},
	{
		'address': 'Dupont, Bradenville',
		'img': 'http://placehold.it/382x229/8593ff?text=Dupont, Bradenville',
		'phone': 12554995962,
		'description': 'enim fugiat in enim Lorem',
		'preview': [
			'http://placehold.it/50/5dd0b3?text=A'
		],
		'weather': {
			'title': 'voluptate laboris aute',
			'icon': 'cloudy.png',
			'water': 15,
			'temperature': 32
		},
		'social_info': {
			'title': 'Alabore_&_velit',
			'img': 'http://placehold.it/100/c936c5?text=BigPic',
			'followers': 88,
			'following': 129
		},
		'type': 2
	},
	{
		'address': 'Agate, Freetown',
		'img': 'http://placehold.it/382x229/ff99eb?text=Agate, Freetown',
		'phone': 15392096324,
		'description': 'id sunt magna veniam ut',
		'preview': [
			'http://placehold.it/50/cb63e0?text=C',
			'http://placehold.it/50/c8192d?text=D',
			'http://placehold.it/50/57d395?text=A'
		],
		'weather': {
			'title': 'commodo exercitation magna',
			'icon': 'cloudy.png',
			'water': 15,
			'temperature': 31
		},
		'social_info': {
			'title': 'Eduis duis',
			'img': 'http://placehold.it/100/dbbfd2?text=BigPic',
			'followers': 41,
			'following': 55
		},
		'type': 0
	},
	{
		'address': 'Bennet, Bartley',
		'img': 'http://placehold.it/382x229/fffcb3?text=Bennet, Bartley',
		'phone': 12980173737,
		'description': 'proident fugiat ea officia voluptate',
		'preview': [
			'http://placehold.it/50/c474e4?text=M',
			'http://placehold.it/50/5a22d5?text=C',
			'http://placehold.it/50/8aab89?text=L'
		],
		'weather': {
			'title': 'culpa consequat esse',
			'icon': 'cloudy.png',
			'water': 12,
			'temperature': 33
		},
		'social_info': {
			'title': 'Mcupidatat anim',
			'img': 'http://placehold.it/100/77a86f?text=BigPic',
			'followers': 83,
			'following': 134
		},
		'type': 0
	},
	{
		'address': 'Beadel, Westwood',
		'img': 'http://placehold.it/382x229/fbffb8?text=Beadel, Westwood',
		'phone': 16230515957,
		'description': 'anim ex dolore elit tempor',
		'preview': [
			'http://placehold.it/50/440a0b?text=N',
			'http://placehold.it/50/8af384?text=C',
			'http://placehold.it/50/440a0b?text=N',
			'http://placehold.it/50/cfbdf0?text=P'
		],
		'weather': {
			'title': 'ex ex aute',
			'icon': 'cloudy.png',
			'water': 26,
			'temperature': 30
		},
		'social_info': {
			'title': 'Cnon_&_laboris',
			'img': 'http://placehold.it/100/229311?text=BigPic',
			'followers': 112,
			'following': 200
		},
		'type': 1
	},
	{
		'address': 'Crosby, Cazadero',
		'img': 'http://placehold.it/382x229/ff9f8f?text=Crosby, Cazadero',
		'phone': 17127002388,
		'description': 'consectetur incididunt excepteur ex id',
		'preview': [
			'http://placehold.it/50/e2f533?text=I'
		],
		'weather': {
			'title': 'esse sunt aliqua',
			'icon': 'cloudy.png',
			'water': 11,
			'temperature': 35
		},
		'social_info': {
			'title': 'Llabore-quis',
			'img': 'http://placehold.it/100/668ddf?text=BigPic',
			'followers': 35,
			'following': 38
		},
		'type': 2
	},
	{
		'address': 'Havens, Byrnedale',
		'img': 'http://placehold.it/382x229/85ffce?text=Havens, Byrnedale',
		'phone': 17747827160,
		'description': 'veniam sit anim cillum irure',
		'preview': [
			'http://placehold.it/50/53b5c2?text=E',
			'http://placehold.it/50/53b5c2?text=E',
			'http://placehold.it/50/747115?text=E',
			'http://placehold.it/50/8f2773?text=E'
		],
		'weather': {
			'title': 'veniam eiusmod Lorem',
			'icon': 'cloudy.png',
			'water': 11,
			'temperature': 11
		},
		'social_info': {
			'title': 'Eirure id',
			'img': 'http://placehold.it/100/2e3da6?text=BigPic',
			'followers': 75,
			'following': 188
		},
		'type': 0
	}
];

export const places$: Observable<Place[]> = of(places)
	.pipe(delay(1000));
