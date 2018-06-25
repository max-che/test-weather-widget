import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import { T } from '@angular/core/src/render3';

export enum placeType {
	Hotel = 0,
	Fishing = 1,
	Tours = 2,
	Weather = 3,
}

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
		'address': '408 Apollo Street, Kenvil',
		'img': 'http://placehold.it/382x229/ffc7c8?text=408 Apollo Street, Kenvil',
		'phone': 17521004643,
		'description': 'sit do ea duis elit',
		'preview': [
			'http://placehold.it/50/80c464?text=A',
			'http://placehold.it/50/ea9099?text=D'
		],
		'weather': {
			'title': 'pariatur qui dolor',
			'icon': 'cloudy.png',
			'water': 15,
			'temperature': 27
		},
		'social_info': {
			'title': 'Aadipisicing-enim',
			'img': 'http://placehold.it/100/7e83bd?text=BigPic',
			'followers': 99,
			'following': 197
		},
		'type': 1
	},
	{
		'address': '963 Bartlett Street, Temperanceville',
		'img': 'http://placehold.it/382x229/ffe399?text=963 Bartlett Street, Temperanceville',
		'phone': 15099944166,
		'description': 'id aliqua adipisicing ullamco veniam',
		'preview': [
			'http://placehold.it/50/f1acec?text=L'
		],
		'weather': {
			'title': 'proident est et',
			'icon': 'cloudy.png',
			'water': 21,
			'temperature': 18
		},
		'social_info': {
			'title': 'Aenim-exercitation',
			'img': 'http://placehold.it/100/b41d22?text=BigPic',
			'followers': 17,
			'following': 42
		},
		'type': 3
	},
	{
		'address': '518 Monument Walk, Condon',
		'img': 'http://placehold.it/382x229/edffc7?text=518 Monument Walk, Condon',
		'phone': 15012704109,
		'description': 'officia exercitation sint in id',
		'preview': [
			'http://placehold.it/50/73dacf?text=E',
			'http://placehold.it/50/1cf271?text=E',
			'http://placehold.it/50/632e8b?text=A'
		],
		'weather': {
			'title': 'esse dolor pariatur',
			'icon': 'cloudy.png',
			'water': 23,
			'temperature': 33
		},
		'social_info': {
			'title': 'Econsectetur_eu',
			'img': 'http://placehold.it/100/3d7693?text=BigPic',
			'followers': 95,
			'following': 78
		},
		'type': 0
	},
	{
		'address': '699 Everit Street, Belva',
		'img': 'http://placehold.it/382x229/80fbff?text=699 Everit Street, Belva',
		'phone': 15270760879,
		'description': 'elit aliquip sunt do in',
		'preview': [
			'http://placehold.it/50/ac22b4?text=E',
			'http://placehold.it/50/fe8750?text=D',
			'http://placehold.it/50/623df1?text=E'
		],
		'weather': {
			'title': 'duis aliquip ut',
			'icon': 'cloudy.png',
			'water': 21,
			'temperature': 11
		},
		'social_info': {
			'title': 'Lvelit_et',
			'img': 'http://placehold.it/100/64cb3b?text=BigPic',
			'followers': 104,
			'following': 21
		},
		'type': 1
	},
	{
		'address': '647 Arlington Avenue, Waterloo',
		'img': 'http://placehold.it/382x229/ccffc7?text=647 Arlington Avenue, Waterloo',
		'phone': 13436755758,
		'description': 'veniam eiusmod ullamco amet laborum',
		'preview': [
			'http://placehold.it/50/e7f7af?text=D',
			'http://placehold.it/50/3a01fd?text=S',
			'http://placehold.it/50/2805b8?text=U'
		],
		'weather': {
			'title': 'commodo laboris eiusmod',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 32
		},
		'social_info': {
			'title': 'Eoccaecat aka ut',
			'img': 'http://placehold.it/100/dbc323?text=BigPic',
			'followers': 27,
			'following': 67
		},
		'type': 3
	},
	{
		'address': '319 Vandervoort Place, Stollings',
		'img': 'http://placehold.it/382x229/9effb1?text=319 Vandervoort Place, Stollings',
		'phone': 17913315953,
		'description': 'et reprehenderit qui consequat veniam',
		'preview': [
			'http://placehold.it/50/db5621?text=C',
			'http://placehold.it/50/84eff8?text=P'
		],
		'weather': {
			'title': 'adipisicing ad reprehenderit',
			'icon': 'cloudy.png',
			'water': 26,
			'temperature': 34
		},
		'social_info': {
			'title': 'Naliqua_&_dolore',
			'img': 'http://placehold.it/100/57bd53?text=BigPic',
			'followers': 27,
			'following': 77
		},
		'type': 3
	},
	{
		'address': '836 Beverly Road, Corinne',
		'img': 'http://placehold.it/382x229/cabdff?text=836 Beverly Road, Corinne',
		'phone': 19964485789,
		'description': 'ad eu mollit nisi enim',
		'preview': [
			'http://placehold.it/50/80ade8?text=I',
			'http://placehold.it/50/19f8d9?text=E'
		],
		'weather': {
			'title': 'qui quis exercitation',
			'icon': 'cloudy.png',
			'water': 14,
			'temperature': 37
		},
		'social_info': {
			'title': 'Cexercitation-occaecat',
			'img': 'http://placehold.it/100/608a8b?text=BigPic',
			'followers': 110,
			'following': 126
		},
		'type': 2
	},
	{
		'address': '426 Holmes Lane, Cavalero',
		'img': 'http://placehold.it/382x229/9ee2ff?text=426 Holmes Lane, Cavalero',
		'phone': 16694639753,
		'description': 'consequat Lorem occaecat ea et',
		'preview': [
			'http://placehold.it/50/bd5e6a?text=C',
			'http://placehold.it/50/bd5e6a?text=C'
		],
		'weather': {
			'title': 'dolore minim cupidatat',
			'icon': 'cloudy.png',
			'water': 20,
			'temperature': 15
		},
		'social_info': {
			'title': 'Dcommodo&anim',
			'img': 'http://placehold.it/100/a1ada3?text=BigPic',
			'followers': 13,
			'following': 111
		},
		'type': 0
	},
	{
		'address': '795 Fillmore Avenue, Roberts',
		'img': 'http://placehold.it/382x229/8fffa0?text=795 Fillmore Avenue, Roberts',
		'phone': 14439394114,
		'description': 'sint aute occaecat occaecat mollit',
		'preview': [
			'http://placehold.it/50/cb7294?text=A',
			'http://placehold.it/50/d44b93?text=R'
		],
		'weather': {
			'title': 'tempor cillum officia',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 35
		},
		'social_info': {
			'title': 'Lincididunt&veniam',
			'img': 'http://placehold.it/100/d0fe7e?text=BigPic',
			'followers': 127,
			'following': 147
		},
		'type': 0
	},
	{
		'address': '298 Goodwin Place, Grandview',
		'img': 'http://placehold.it/382x229/ffc2ef?text=298 Goodwin Place, Grandview',
		'phone': 15107830250,
		'description': 'qui incididunt minim ex aliquip',
		'preview': [
			'http://placehold.it/50/a2a309?text=I',
			'http://placehold.it/50/263cb0?text=E'
		],
		'weather': {
			'title': 'eu mollit exercitation',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 25
		},
		'social_info': {
			'title': 'Maliqua&excepteur',
			'img': 'http://placehold.it/100/f832a6?text=BigPic',
			'followers': 27,
			'following': 65
		},
		'type': 1
	},
	{
		'address': '464 Butler Place, Calpine',
		'img': 'http://placehold.it/382x229/b1ffae?text=464 Butler Place, Calpine',
		'phone': 12716655859,
		'description': 'dolor nulla aute magna id',
		'preview': [
			'http://placehold.it/50/986656?text=I',
			'http://placehold.it/50/e9f24?text=D'
		],
		'weather': {
			'title': 'Lorem esse excepteur',
			'icon': 'cloudy.png',
			'water': 13,
			'temperature': 16
		},
		'social_info': {
			'title': 'Udolore aute',
			'img': 'http://placehold.it/100/fe7bbc?text=BigPic',
			'followers': 37,
			'following': 35
		},
		'type': 0
	},
	{
		'address': '260 Oriental Court, Farmington',
		'img': 'http://placehold.it/382x229/f7ffcc?text=260 Oriental Court, Farmington',
		'phone': 15660355749,
		'description': 'enim labore incididunt ullamco Lorem',
		'preview': [
			'http://placehold.it/50/247dec?text=A',
			'http://placehold.it/50/bf4ff5?text=A'
		],
		'weather': {
			'title': 'voluptate ullamco ullamco',
			'icon': 'cloudy.png',
			'water': 20,
			'temperature': 13
		},
		'social_info': {
			'title': 'Caliquip aka proident',
			'img': 'http://placehold.it/100/5984b2?text=BigPic',
			'followers': 74,
			'following': 125
		},
		'type': 1
	},
	{
		'address': '665 Joralemon Street, Enlow',
		'img': 'http://placehold.it/382x229/a6ff8a?text=665 Joralemon Street, Enlow',
		'phone': 13059534884,
		'description': 'culpa aute laboris ad aute',
		'preview': [
			'http://placehold.it/50/f5c911?text=A',
			'http://placehold.it/50/d68786?text=P'
		],
		'weather': {
			'title': 'id enim esse',
			'icon': 'cloudy.png',
			'water': 17,
			'temperature': 37
		},
		'social_info': {
			'title': 'Dconsectetur_commodo',
			'img': 'http://placehold.it/100/facb6f?text=BigPic',
			'followers': 74,
			'following': 25
		},
		'type': 2
	},
	{
		'address': '443 Garland Court, Newry',
		'img': 'http://placehold.it/382x229/a29eff?text=443 Garland Court, Newry',
		'phone': 15377720995,
		'description': 'magna veniam mollit voluptate ad',
		'preview': [
			'http://placehold.it/50/44c70a?text=P'
		],
		'weather': {
			'title': 'reprehenderit minim amet',
			'icon': 'cloudy.png',
			'water': 10,
			'temperature': 29
		},
		'social_info': {
			'title': 'Oanim_incididunt',
			'img': 'http://placehold.it/100/c95a31?text=BigPic',
			'followers': 51,
			'following': 86
		},
		'type': 1
	},
	{
		'address': '415 Grand Street, Norwood',
		'img': 'http://placehold.it/382x229/a8ffd5?text=415 Grand Street, Norwood',
		'phone': 12726615079,
		'description': 'veniam officia elit amet et',
		'preview': [
			'http://placehold.it/50/887488?text=N',
			'http://placehold.it/50/d24e1a?text=E'
		],
		'weather': {
			'title': 'ipsum occaecat ullamco',
			'icon': 'cloudy.png',
			'water': 28,
			'temperature': 23
		},
		'social_info': {
			'title': 'Elaboris_excepteur',
			'img': 'http://placehold.it/100/d292a5?text=BigPic',
			'followers': 50,
			'following': 79
		},
		'type': 0
	},
	{
		'address': '470 Lloyd Street, Lorraine',
		'img': 'http://placehold.it/382x229/ccffbd?text=470 Lloyd Street, Lorraine',
		'phone': 19503958407,
		'description': 'non do eiusmod consequat ut',
		'preview': [
			'http://placehold.it/50/cf7c08?text=C',
			'http://placehold.it/50/cf7c08?text=C',
			'http://placehold.it/50/cf7c08?text=C',
			'http://placehold.it/50/cf7c08?text=C'
		],
		'weather': {
			'title': 'veniam officia cillum',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 28
		},
		'social_info': {
			'title': 'Iet_&_et',
			'img': 'http://placehold.it/100/5878e8?text=BigPic',
			'followers': 55,
			'following': 92
		},
		'type': 2
	},
	{
		'address': '441 Doscher Street, Garnet',
		'img': 'http://placehold.it/382x229/bdaeff?text=441 Doscher Street, Garnet',
		'phone': 11965614965,
		'description': 'aliquip sint excepteur cupidatat consequat',
		'preview': [
			'http://placehold.it/50/f09b9d?text=D',
			'http://placehold.it/50/487aa?text=E',
			'http://placehold.it/50/aa0da4?text=E'
		],
		'weather': {
			'title': 'sint aliqua esse',
			'icon': 'cloudy.png',
			'water': 24,
			'temperature': 32
		},
		'social_info': {
			'title': 'Deu_&_Lorem',
			'img': 'http://placehold.it/100/9f5966?text=BigPic',
			'followers': 96,
			'following': 51
		},
		'type': 1
	},
	{
		'address': '365 Powell Street, Chase',
		'img': 'http://placehold.it/382x229/ffbde5?text=365 Powell Street, Chase',
		'phone': 16602057552,
		'description': 'cillum occaecat proident duis nisi',
		'preview': [
			'http://placehold.it/50/97a71?text=C',
			'http://placehold.it/50/7b6fd3?text=V'
		],
		'weather': {
			'title': 'in irure ipsum',
			'icon': 'cloudy.png',
			'water': 19,
			'temperature': 33
		},
		'social_info': {
			'title': 'Inulla_id',
			'img': 'http://placehold.it/100/ab939e?text=BigPic',
			'followers': 14,
			'following': 102
		},
		'type': 1
	},
	{
		'address': '533 Coleridge Street, Brogan',
		'img': 'http://placehold.it/382x229/85fffc?text=533 Coleridge Street, Brogan',
		'phone': 14303009405,
		'description': 'nisi dolor occaecat id do',
		'preview': [
			'http://placehold.it/50/229d78?text=A',
			'http://placehold.it/50/f7c49e?text=I',
			'http://placehold.it/50/f7c49e?text=I',
			'http://placehold.it/50/58b010?text=M'
		],
		'weather': {
			'title': 'adipisicing in irure',
			'icon': 'cloudy.png',
			'water': 29,
			'temperature': 28
		},
		'social_info': {
			'title': 'Lsunt aka nulla',
			'img': 'http://placehold.it/100/e26871?text=BigPic',
			'followers': 35,
			'following': 152
		},
		'type': 2
	},
	{
		'address': '403 Woodpoint Road, Zeba',
		'img': 'http://placehold.it/382x229/ff8a8a?text=403 Woodpoint Road, Zeba',
		'phone': 15642837545,
		'description': 'excepteur culpa aliqua eiusmod aliqua',
		'preview': [
			'http://placehold.it/50/5c03bb?text=N',
			'http://placehold.it/50/bb9658?text=S'
		],
		'weather': {
			'title': 'ex pariatur veniam',
			'icon': 'cloudy.png',
			'water': 24,
			'temperature': 29
		},
		'social_info': {
			'title': 'Ldolore aka esse',
			'img': 'http://placehold.it/100/479b1e?text=BigPic',
			'followers': 123,
			'following': 41
		},
		'type': 1
	},
	{
		'address': '938 Vanderveer Place, Vincent',
		'img': 'http://placehold.it/382x229/d2ffc7?text=938 Vanderveer Place, Vincent',
		'phone': 13133980855,
		'description': 'veniam quis dolore enim nisi',
		'preview': [
			'http://placehold.it/50/75fbd3?text=Q',
			'http://placehold.it/50/5f2c1?text=A'
		],
		'weather': {
			'title': 'id enim in',
			'icon': 'cloudy.png',
			'water': 28,
			'temperature': 19
		},
		'social_info': {
			'title': 'Edolor_sit',
			'img': 'http://placehold.it/100/b5083f?text=BigPic',
			'followers': 38,
			'following': 21
		},
		'type': 0
	},
	{
		'address': '598 Kane Street, Brethren',
		'img': 'http://placehold.it/382x229/cda3ff?text=598 Kane Street, Brethren',
		'phone': 11885259382,
		'description': 'cupidatat in elit aliqua Lorem',
		'preview': [
			'http://placehold.it/50/106aa3?text=I',
			'http://placehold.it/50/db7262?text=E'
		],
		'weather': {
			'title': 'laborum irure deserunt',
			'icon': 'cloudy.png',
			'water': 19,
			'temperature': 11
		},
		'social_info': {
			'title': 'Econsequat velit',
			'img': 'http://placehold.it/100/f29a72?text=BigPic',
			'followers': 123,
			'following': 102
		},
		'type': 3
	},
	{
		'address': '621 Polar Street, Sutton',
		'img': 'http://placehold.it/382x229/ffa8c5?text=621 Polar Street, Sutton',
		'phone': 19658431802,
		'description': 'commodo labore amet ullamco officia',
		'preview': [
			'http://placehold.it/50/eef4a?text=N',
			'http://placehold.it/50/d1db03?text=E',
			'http://placehold.it/50/a5e2a9?text=V',
			'http://placehold.it/50/191c9f?text=M'
		],
		'weather': {
			'title': 'aliqua anim officia',
			'icon': 'cloudy.png',
			'water': 10,
			'temperature': 13
		},
		'social_info': {
			'title': 'Equis-ullamco',
			'img': 'http://placehold.it/100/e73d35?text=BigPic',
			'followers': 28,
			'following': 32
		},
		'type': 2
	},
	{
		'address': '463 Melba Court, Roy',
		'img': 'http://placehold.it/382x229/a8b2ff?text=463 Melba Court, Roy',
		'phone': 18102984954,
		'description': 'ex laborum aliquip sint dolore',
		'preview': [
			'http://placehold.it/50/26f5db?text=C',
			'http://placehold.it/50/2ec565?text=C'
		],
		'weather': {
			'title': 'irure magna veniam',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 20
		},
		'social_info': {
			'title': 'Unulla reprehenderit',
			'img': 'http://placehold.it/100/db8ec4?text=BigPic',
			'followers': 67,
			'following': 55
		},
		'type': 0
	},
	{
		'address': '887 Temple Court, Dahlen',
		'img': 'http://placehold.it/382x229/fff1c2?text=887 Temple Court, Dahlen',
		'phone': 15527203748,
		'description': 'aliquip commodo cillum cillum aute',
		'preview': [
			'http://placehold.it/50/42651e?text=D',
			'http://placehold.it/50/caf973?text=L',
			'http://placehold.it/50/30f87c?text=S',
			'http://placehold.it/50/4f94e2?text=Q'
		],
		'weather': {
			'title': 'aliquip pariatur pariatur',
			'icon': 'cloudy.png',
			'water': 11,
			'temperature': 17
		},
		'social_info': {
			'title': 'Dsunt_&_dolor',
			'img': 'http://placehold.it/100/e08f6c?text=BigPic',
			'followers': 87,
			'following': 97
		},
		'type': 2
	},
	{
		'address': '510 Berkeley Place, Devon',
		'img': 'http://placehold.it/382x229/e58aff?text=510 Berkeley Place, Devon',
		'phone': 14360688475,
		'description': 'laborum enim proident sunt commodo',
		'preview': [
			'http://placehold.it/50/5b7cbd?text=E'
		],
		'weather': {
			'title': 'tempor eu deserunt',
			'icon': 'cloudy.png',
			'water': 23,
			'temperature': 16
		},
		'social_info': {
			'title': 'Eeiusmod_id',
			'img': 'http://placehold.it/100/3c5965?text=BigPic',
			'followers': 86,
			'following': 62
		},
		'type': 1
	},
	{
		'address': '540 Carlton Avenue, Harrison',
		'img': 'http://placehold.it/382x229/ff94a1?text=540 Carlton Avenue, Harrison',
		'phone': 11086935934,
		'description': 'amet est nostrud cillum nulla',
		'preview': [
			'http://placehold.it/50/590f44?text=I',
			'http://placehold.it/50/351a57?text=C'
		],
		'weather': {
			'title': 'sint tempor sunt',
			'icon': 'cloudy.png',
			'water': 26,
			'temperature': 38
		},
		'social_info': {
			'title': 'Dexercitation&magna',
			'img': 'http://placehold.it/100/ade2da?text=BigPic',
			'followers': 50,
			'following': 158
		},
		'type': 0
	},
	{
		'address': '280 Eldert Lane, Highland',
		'img': 'http://placehold.it/382x229/ff94bd?text=280 Eldert Lane, Highland',
		'phone': 19630591895,
		'description': 'anim id in commodo labore',
		'preview': [
			'http://placehold.it/50/def73e?text=V',
			'http://placehold.it/50/9ff265?text=E'
		],
		'weather': {
			'title': 'pariatur consectetur sit',
			'icon': 'cloudy.png',
			'water': 11,
			'temperature': 35
		},
		'social_info': {
			'title': 'Econsequat aka est',
			'img': 'http://placehold.it/100/e3854f?text=BigPic',
			'followers': 69,
			'following': 77
		},
		'type': 0
	},
	{
		'address': '268 Wythe Place, Marienthal',
		'img': 'http://placehold.it/382x229/dfb3ff?text=268 Wythe Place, Marienthal',
		'phone': 18156495979,
		'description': 'pariatur in duis excepteur excepteur',
		'preview': [
			'http://placehold.it/50/f4680c?text=D',
			'http://placehold.it/50/f2a816?text=L',
			'http://placehold.it/50/1fec34?text=D'
		],
		'weather': {
			'title': 'exercitation non anim',
			'icon': 'cloudy.png',
			'water': 24,
			'temperature': 13
		},
		'social_info': {
			'title': 'Emollit ad',
			'img': 'http://placehold.it/100/5652aa?text=BigPic',
			'followers': 24,
			'following': 21
		},
		'type': 1
	},
	{
		'address': '698 Bowne Street, Wawona',
		'img': 'http://placehold.it/382x229/bdffdc?text=698 Bowne Street, Wawona',
		'phone': 11366120333,
		'description': 'velit labore excepteur est laboris',
		'preview': [
			'http://placehold.it/50/6f2f0d?text=D',
			'http://placehold.it/50/dc9e0e?text=C',
			'http://placehold.it/50/105994?text=I'
		],
		'weather': {
			'title': 'incididunt et commodo',
			'icon': 'cloudy.png',
			'water': 23,
			'temperature': 33
		},
		'social_info': {
			'title': 'Lvelit dolore',
			'img': 'http://placehold.it/100/5d3778?text=BigPic',
			'followers': 96,
			'following': 114
		},
		'type': 3
	},
	{
		'address': '111 Crosby Avenue, Driftwood',
		'img': 'http://placehold.it/382x229/b3fcff?text=111 Crosby Avenue, Driftwood',
		'phone': 16555347734,
		'description': 'exercitation consequat minim culpa proident',
		'preview': [
			'http://placehold.it/50/4fd131?text=L'
		],
		'weather': {
			'title': 'do nostrud nostrud',
			'icon': 'cloudy.png',
			'water': 18,
			'temperature': 14
		},
		'social_info': {
			'title': 'Iet&tempor',
			'img': 'http://placehold.it/100/fd1d4?text=BigPic',
			'followers': 125,
			'following': 57
		},
		'type': 2
	},
	{
		'address': '664 Anna Court, Norfolk',
		'img': 'http://placehold.it/382x229/a8ffae?text=664 Anna Court, Norfolk',
		'phone': 18099471210,
		'description': 'ullamco consequat aliquip cupidatat non',
		'preview': [
			'http://placehold.it/50/e5cc6f?text=O'
		],
		'weather': {
			'title': 'do qui reprehenderit',
			'icon': 'cloudy.png',
			'water': 14,
			'temperature': 37
		},
		'social_info': {
			'title': 'Cconsectetur-cupidatat',
			'img': 'http://placehold.it/100/a6a4c0?text=BigPic',
			'followers': 126,
			'following': 95
		},
		'type': 1
	},
	{
		'address': '263 Independence Avenue, Rew',
		'img': 'http://placehold.it/382x229/85ccff?text=263 Independence Avenue, Rew',
		'phone': 11908256401,
		'description': 'voluptate amet deserunt cupidatat ullamco',
		'preview': [
			'http://placehold.it/50/f0f99a?text=E',
			'http://placehold.it/50/60e5ec?text=F',
			'http://placehold.it/50/e9a294?text=A',
			'http://placehold.it/50/43eab0?text=D'
		],
		'weather': {
			'title': 'ea mollit eiusmod',
			'icon': 'cloudy.png',
			'water': 27,
			'temperature': 19
		},
		'social_info': {
			'title': 'Relit-pariatur',
			'img': 'http://placehold.it/100/54dad0?text=BigPic',
			'followers': 52,
			'following': 75
		},
		'type': 2
	},
	{
		'address': '745 Imlay Street, Warren',
		'img': 'http://placehold.it/382x229/ffa3d0?text=745 Imlay Street, Warren',
		'phone': 13978121142,
		'description': 'dolor eu tempor id culpa',
		'preview': [
			'http://placehold.it/50/7365db?text=V',
			'http://placehold.it/50/9a3618?text=D'
		],
		'weather': {
			'title': 'proident deserunt et',
			'icon': 'cloudy.png',
			'water': 16,
			'temperature': 21
		},
		'social_info': {
			'title': 'Uesse aka amet',
			'img': 'http://placehold.it/100/9fd892?text=BigPic',
			'followers': 120,
			'following': 125
		},
		'type': 0
	},
	{
		'address': '534 Essex Street, Dubois',
		'img': 'http://placehold.it/382x229/f2c2ff?text=534 Essex Street, Dubois',
		'phone': 14688362396,
		'description': 'voluptate anim irure labore qui',
		'preview': [
			'http://placehold.it/50/6228b0?text=S',
			'http://placehold.it/50/20e7d8?text=E',
			'http://placehold.it/50/943a9?text=E'
		],
		'weather': {
			'title': 'mollit enim labore',
			'icon': 'cloudy.png',
			'water': 25,
			'temperature': 35
		},
		'social_info': {
			'title': 'Elabore&ex',
			'img': 'http://placehold.it/100/867d98?text=BigPic',
			'followers': 49,
			'following': 90
		},
		'type': 3
	},
	{
		'address': '936 Wortman Avenue, Edinburg',
		'img': 'http://placehold.it/382x229/a3fffc?text=936 Wortman Avenue, Edinburg',
		'phone': 16797058783,
		'description': 'nisi mollit officia ut laboris',
		'preview': [
			'http://placehold.it/50/72a164?text=S',
			'http://placehold.it/50/a54b40?text=A',
			'http://placehold.it/50/1c0757?text=M'
		],
		'weather': {
			'title': 'proident consequat quis',
			'icon': 'cloudy.png',
			'water': 10,
			'temperature': 16
		},
		'social_info': {
			'title': 'Oincididunt_ipsum',
			'img': 'http://placehold.it/100/a90efa?text=BigPic',
			'followers': 62,
			'following': 169
		},
		'type': 2
	},
	{
		'address': '172 Opal Court, Cochranville',
		'img': 'http://placehold.it/382x229/ffa8ff?text=172 Opal Court, Cochranville',
		'phone': 13303402731,
		'description': 'minim pariatur minim ex Lorem',
		'preview': [
			'http://placehold.it/50/389128?text=A',
			'http://placehold.it/50/dbd6d4?text=A',
			'http://placehold.it/50/21079f?text=C'
		],
		'weather': {
			'title': 'mollit excepteur ea',
			'icon': 'cloudy.png',
			'water': 26,
			'temperature': 15
		},
		'social_info': {
			'title': 'Atempor&cillum',
			'img': 'http://placehold.it/100/3b7902?text=BigPic',
			'followers': 11,
			'following': 73
		},
		'type': 1
	},
	{
		'address': '698 Neptune Avenue, Ladera',
		'img': 'http://placehold.it/382x229/e5ff94?text=698 Neptune Avenue, Ladera',
		'phone': 18154951854,
		'description': 'in eu ipsum non velit',
		'preview': [
			'http://placehold.it/50/7344c2?text=E'
		],
		'weather': {
			'title': 'aliqua aliqua cillum',
			'icon': 'cloudy.png',
			'water': 21,
			'temperature': 24
		},
		'social_info': {
			'title': 'Adeserunt adipisicing',
			'img': 'http://placehold.it/100/1c5369?text=BigPic',
			'followers': 58,
			'following': 109
		},
		'type': 3
	},
	{
		'address': '525 Beadel Street, Sharon',
		'img': 'http://placehold.it/382x229/d4ffa3?text=525 Beadel Street, Sharon',
		'phone': 14742210787,
		'description': 'pariatur nisi ullamco sint dolore',
		'preview': [
			'http://placehold.it/50/68edb8?text=Q',
			'http://placehold.it/50/83c7cd?text=A'
		],
		'weather': {
			'title': 'pariatur duis Lorem',
			'icon': 'cloudy.png',
			'water': 22,
			'temperature': 25
		},
		'social_info': {
			'title': 'Uvelit_&_consequat',
			'img': 'http://placehold.it/100/e119c8?text=BigPic',
			'followers': 89,
			'following': 165
		},
		'type': 0
	}
];

export const places$: Observable<Place[]> = of(places)
	.pipe(delay(1000));
