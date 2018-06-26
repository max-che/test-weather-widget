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
	full_address: string;
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
		'full_address': 'Ingraham Street, Goldfield, Iowa',
		'address': 'Ingraham,  Goldfield',
		'img': 'http://placehold.it/382x229/99ffd1?text=Ingraham Street, Goldfield, Iowa',
		'phone': 14103902094,
		'description': 'cillum exercitation fugiat amet voluptate',
		'preview': [
			'http://placehold.it/50/bf8d3b?text=T',
			'http://placehold.it/50/3f05d2?text=C'
		],
		'weather': {
			'title': 'reprehenderit occaecat quis',
			'icon': 'cloudy.png',
			'water': 12,
			'temperature': 12
		},
		'social_info': {
			'title': 'Asunt-sint',
			'img': 'http://placehold.it/100/59b8e1?text=TwitPic',
			'followers': 38,
			'following': 191
		},
		'type': 0
	},
	{
		'full_address': 'Stuyvesant Avenue, Glasgow, Maryland',
		'address': 'Stuyvesant,  Glasgow',
		'img': 'http://placehold.it/382x229/ff9e99?text=Stuyvesant Avenue, Glasgow, Maryland',
		'phone': 12987780330,
		'description': 'tempor reprehenderit ex culpa cupidatat',
		'preview': [
			'http://placehold.it/50/86ee4c?text=M',
			'http://placehold.it/50/db7497?text=I'
		],
		'weather': {
			'title': 'Lorem ullamco labore',
			'icon': 'cloudy.png',
			'water': 18,
			'temperature': 18
		},
		'social_info': {
			'title': 'Ndolore aka officia',
			'img': 'http://placehold.it/100/1120a7?text=TwitPic',
			'followers': 41,
			'following': 178
		},
		'type': 0
	},
	{
		'full_address': 'Himrod Street, Starks, Florida',
		'address': 'Himrod,  Starks',
		'img': 'http://placehold.it/382x229/ffb3f0?text=Himrod Street, Starks, Florida',
		'phone': 17199546868,
		'description': 'voluptate eiusmod id irure duis',
		'preview': [
			'http://placehold.it/50/faff7?text=S'
		],
		'weather': {
			'title': 'ea adipisicing incididunt',
			'icon': 'cloudy.png',
			'water': 21,
			'temperature': 30
		},
		'social_info': {
			'title': 'Avelit aka amet',
			'img': 'http://placehold.it/100/a5c76c?text=TwitPic',
			'followers': 111,
			'following': 161
		},
		'type': 0
	},
	{
		'full_address': 'Thornton Street, Blue, Vermont',
		'address': 'Thornton,  Blue',
		'img': 'http://placehold.it/382x229/ffdac7?text=Thornton Street, Blue, Vermont',
		'phone': 19979080809,
		'description': 'proident excepteur sunt velit sunt',
		'preview': [
			'http://placehold.it/50/3cb875?text=I',
			'http://placehold.it/50/1fa20f?text=I',
			'http://placehold.it/50/1fa20f?text=I'
		],
		'weather': {
			'title': 'aliquip reprehenderit dolor',
			'icon': 'cloudy.png',
			'water': 23,
			'temperature': 27
		},
		'social_info': {
			'title': 'Sculpa_consequat',
			'img': 'http://placehold.it/100/1e3e4a?text=TwitPic',
			'followers': 112,
			'following': 78
		},
		'type': 3
	},
	{
		'full_address': 'Whitty Lane, Independence, Tennessee',
		'address': 'Whitty,  Independence',
		'img': 'http://placehold.it/382x229/ffd3bd?text=Whitty Lane, Independence, Tennessee',
		'phone': 11710840616,
		'description': 'id anim minim sint nisi',
		'preview': [
			'http://placehold.it/50/c2d23f?text=A',
			'http://placehold.it/50/2e0e73?text=N',
			'http://placehold.it/50/5d3ecc?text=M',
			'http://placehold.it/50/b03d3d?text=E'
		],
		'weather': {
			'title': 'reprehenderit do ipsum',
			'icon': 'cloudy.png',
			'water': 14,
			'temperature': 26
		},
		'social_info': {
			'title': 'Iad_reprehenderit',
			'img': 'http://placehold.it/100/a971d5?text=TwitPic',
			'followers': 90,
			'following': 195
		},
		'type': 0
	},
	{
		'full_address': 'Montieth Street, Broadlands, Texas',
		'address': 'Montieth,  Broadlands',
		'img': 'http://placehold.it/382x229/e4ffb3?text=Montieth Street, Broadlands, Texas',
		'phone': 17235016413,
		'description': 'Lorem dolore laborum ex deserunt',
		'preview': [
			'http://placehold.it/50/1cb601?text=I',
			'http://placehold.it/50/1cb601?text=I',
			'http://placehold.it/50/b98577?text=U'
		],
		'weather': {
			'title': 'amet dolore aliqua',
			'icon': 'cloudy.png',
			'water': 23,
			'temperature': 33
		},
		'social_info': {
			'title': 'Mest_officia',
			'img': 'http://placehold.it/100/f97f0c?text=TwitPic',
			'followers': 13,
			'following': 122
		},
		'type': 3
	},
	{
		'full_address': 'Frost Street, Choctaw, Kentucky',
		'address': 'Frost,  Choctaw',
		'img': 'http://placehold.it/382x229/b3f4ff?text=Frost Street, Choctaw, Kentucky',
		'phone': 14409957865,
		'description': 'pariatur laboris anim esse ad',
		'preview': [
			'http://placehold.it/50/2773e6?text=I',
			'http://placehold.it/50/4845fe?text=E',
			'http://placehold.it/50/4845fe?text=E'
		],
		'weather': {
			'title': 'voluptate dolor est',
			'icon': 'cloudy.png',
			'water': 23,
			'temperature': 24
		},
		'social_info': {
			'title': 'Aanim nisi',
			'img': 'http://placehold.it/100/876261?text=TwitPic',
			'followers': 95,
			'following': 141
		},
		'type': 0
	},
	{
		'full_address': 'Fillmore Place, Lindisfarne, Alabama',
		'address': 'Fillmore,  Lindisfarne',
		'img': 'http://placehold.it/382x229/85ffd1?text=Fillmore Place, Lindisfarne, Alabama',
		'phone': 18085132201,
		'description': 'aliqua excepteur velit dolor aute',
		'preview': [
			'http://placehold.it/50/a72a39?text=C',
			'http://placehold.it/50/47a2f4?text=R'
		],
		'weather': {
			'title': 'sint consequat occaecat',
			'icon': 'cloudy.png',
			'water': 22,
			'temperature': 10
		},
		'social_info': {
			'title': 'Ncillum_aliqua',
			'img': 'http://placehold.it/100/373f6a?text=TwitPic',
			'followers': 92,
			'following': 170
		},
		'type': 0
	},
	{
		'full_address': 'Nova Court, Umapine, Arkansas',
		'address': 'Nova,  Umapine',
		'img': 'http://placehold.it/382x229/85ff8f?text=Nova Court, Umapine, Arkansas',
		'phone': 12942447831,
		'description': 'nulla duis qui dolor ut',
		'preview': [
			'http://placehold.it/50/738f58?text=E',
			'http://placehold.it/50/3a953d?text=E',
			'http://placehold.it/50/738f58?text=E',
			'http://placehold.it/50/718d5e?text=A'
		],
		'weather': {
			'title': 'qui officia laboris',
			'icon': 'cloudy.png',
			'water': 25,
			'temperature': 20
		},
		'social_info': {
			'title': 'Udolor_id',
			'img': 'http://placehold.it/100/7c72f7?text=TwitPic',
			'followers': 24,
			'following': 24
		},
		'type': 1
	},
	{
		'full_address': 'Grant Avenue, Tampico, Virgin Islands',
		'address': 'Grant,  Tampico',
		'img': 'http://placehold.it/382x229/b9ffa8?text=Grant Avenue, Tampico, Virgin Islands',
		'phone': 18447036949,
		'description': 'id excepteur aliquip non sit',
		'preview': [
			'http://placehold.it/50/59260f?text=A',
			'http://placehold.it/50/e6782a?text=N'
		],
		'weather': {
			'title': 'exercitation nulla qui',
			'icon': 'cloudy.png',
			'water': 19,
			'temperature': 22
		},
		'social_info': {
			'title': 'Vsint-cupidatat',
			'img': 'http://placehold.it/100/b569d5?text=TwitPic',
			'followers': 51,
			'following': 34
		},
		'type': 1
	},
	{
		'full_address': 'Berkeley Place, Weogufka, Georgia',
		'address': 'Berkeley,  Weogufka',
		'img': 'http://placehold.it/382x229/e5a8ff?text=Berkeley Place, Weogufka, Georgia',
		'phone': 16528553125,
		'description': 'non nulla dolore officia nulla',
		'preview': [
			'http://placehold.it/50/bfc458?text=S',
			'http://placehold.it/50/53cf16?text=E',
			'http://placehold.it/50/25057e?text=M'
		],
		'weather': {
			'title': 'pariatur mollit ut',
			'icon': 'cloudy.png',
			'water': 20,
			'temperature': 25
		},
		'social_info': {
			'title': 'Iincididunt&consectetur',
			'img': 'http://placehold.it/100/932a33?text=TwitPic',
			'followers': 63,
			'following': 141
		},
		'type': 2
	}
];

export const places$: Observable<Place[]> = of(places)
	.pipe(delay(1000));
