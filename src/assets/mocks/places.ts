import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

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
	weather: Weather;
	social_info: Social;
	type: placeType;
}

const places: Place[] = [
	{
		"address": "334 Dinsmore Place, Herlong",
		"img": "http://placehold.it/382x229/ff8fe7?text=334 Dinsmore Place, Herlong",
		"phone": 73625928784,
		"weather": {
			"title": "cillum sit nisi",
			"icon": "cloudy.png",
			"water": 29,
			"temperature": 24
		},
		"social_info": {
			"title": "Aullamco ea",
			"img": "http://placehold.it/100/e5ce48?text=BigPic",
			"followers": 73,
			"following": 39
		},
		"type": 3
	},
	{
		"address": "124 Lake Street, Defiance",
		"img": "http://placehold.it/382x229/c9ffbd?text=124 Lake Street, Defiance",
		"phone": 77587858800,
		"weather": {
			"title": "est duis nulla",
			"icon": "cloudy.png",
			"water": 21,
			"temperature": 25
		},
		"social_info": {
			"title": "Lullamco&deserunt",
			"img": "http://placehold.it/100/212fbd?text=BigPic",
			"followers": 18,
			"following": 86
		},
		"type": 1
	},
	{
		"address": "850 Harwood Place, Dyckesville",
		"img": "http://placehold.it/382x229/c2fbff?text=850 Harwood Place, Dyckesville",
		"phone": 76793300324,
		"weather": {
			"title": "sint Lorem proident",
			"icon": "cloudy.png",
			"water": 28,
			"temperature": 10
		},
		"social_info": {
			"title": "Amollit&in",
			"img": "http://placehold.it/100/577325?text=BigPic",
			"followers": 24,
			"following": 176
		},
		"type": 1
	},
	{
		"address": "880 Williams Avenue, Leland",
		"img": "http://placehold.it/382x229/99ffd8?text=880 Williams Avenue, Leland",
		"phone": 75122892565,
		"weather": {
			"title": "excepteur magna et",
			"icon": "cloudy.png",
			"water": 10,
			"temperature": 32
		},
		"social_info": {
			"title": "Epariatur aka non",
			"img": "http://placehold.it/100/ae61df?text=BigPic",
			"followers": 99,
			"following": 143
		},
		"type": 0
	},
	{
		"address": "962 Stockholm Street, Waterford",
		"img": "http://placehold.it/382x229/80ff98?text=962 Stockholm Street, Waterford",
		"phone": 74565958672,
		"weather": {
			"title": "fugiat quis ipsum",
			"icon": "cloudy.png",
			"water": 16,
			"temperature": 12
		},
		"social_info": {
			"title": "Umollit&est",
			"img": "http://placehold.it/100/a1cfdf?text=BigPic",
			"followers": 56,
			"following": 38
		},
		"type": 3
	},
	{
		"address": "680 Hart Street, Nipinnawasee",
		"img": "http://placehold.it/382x229/c685ff?text=680 Hart Street, Nipinnawasee",
		"phone": 72599266821,
		"weather": {
			"title": "voluptate et anim",
			"icon": "cloudy.png",
			"water": 13,
			"temperature": 15
		},
		"social_info": {
			"title": "Ereprehenderit&aute",
			"img": "http://placehold.it/100/3c17c9?text=BigPic",
			"followers": 80,
			"following": 22
		},
		"type": 1
	},
	{
		"address": "168 Lewis Avenue, Jacksonwald",
		"img": "http://placehold.it/382x229/d29eff?text=168 Lewis Avenue, Jacksonwald",
		"phone": 76194184210,
		"weather": {
			"title": "eu ex cupidatat",
			"icon": "cloudy.png",
			"water": 26,
			"temperature": 30
		},
		"social_info": {
			"title": "Equi&proident",
			"img": "http://placehold.it/100/254432?text=BigPic",
			"followers": 91,
			"following": 57
		},
		"type": 3
	},
	{
		"address": "112 Bowne Street, Kempton",
		"img": "http://placehold.it/382x229/99afff?text=112 Bowne Street, Kempton",
		"phone": 72465659811,
		"weather": {
			"title": "fugiat proident velit",
			"icon": "cloudy.png",
			"water": 12,
			"temperature": 32
		},
		"social_info": {
			"title": "Damet aka consequat",
			"img": "http://placehold.it/100/4ce164?text=BigPic",
			"followers": 25,
			"following": 152
		},
		"type": 0
	},
	{
		"address": "364 Hendrickson Place, Falmouth",
		"img": "http://placehold.it/382x229/ffc2fa?text=364 Hendrickson Place, Falmouth",
		"phone": 75744563881,
		"weather": {
			"title": "deserunt magna occaecat",
			"icon": "cloudy.png",
			"water": 11,
			"temperature": 17
		},
		"social_info": {
			"title": "Dcupidatat_&_nulla",
			"img": "http://placehold.it/100/b07d1c?text=BigPic",
			"followers": 19,
			"following": 149
		},
		"type": 3
	},
	{
		"address": "400 Ridge Court, Nogal",
		"img": "http://placehold.it/382x229/ddffc2?text=400 Ridge Court, Nogal",
		"phone": 77627371254,
		"weather": {
			"title": "adipisicing culpa nulla",
			"icon": "cloudy.png",
			"water": 26,
			"temperature": 17
		},
		"social_info": {
			"title": "Fsunt et",
			"img": "http://placehold.it/100/c6e4cd?text=BigPic",
			"followers": 20,
			"following": 21
		},
		"type": 1
	},
	{
		"address": "760 Ridge Boulevard, Kimmell",
		"img": "http://placehold.it/382x229/8fffa7?text=760 Ridge Boulevard, Kimmell",
		"phone": 79964871513,
		"weather": {
			"title": "eu ipsum irure",
			"icon": "cloudy.png",
			"water": 21,
			"temperature": 16
		},
		"social_info": {
			"title": "Emagna_&_esse",
			"img": "http://placehold.it/100/74951?text=BigPic",
			"followers": 26,
			"following": 51
		},
		"type": 3
	},
	{
		"address": "723 Quentin Road, Lookingglass",
		"img": "http://placehold.it/382x229/ebffae?text=723 Quentin Road, Lookingglass",
		"phone": 74579966402,
		"weather": {
			"title": "sunt ea culpa",
			"icon": "cloudy.png",
			"water": 10,
			"temperature": 15
		},
		"social_info": {
			"title": "Uexcepteur-minim",
			"img": "http://placehold.it/100/b42d90?text=BigPic",
			"followers": 10,
			"following": 60
		},
		"type": 1
	},
	{
		"address": "366 Verona Place, Brewster",
		"img": "http://placehold.it/382x229/ffb8ec?text=366 Verona Place, Brewster",
		"phone": 79641253339,
		"weather": {
			"title": "commodo labore proident",
			"icon": "cloudy.png",
			"water": 17,
			"temperature": 30
		},
		"social_info": {
			"title": "Lirure_mollit",
			"img": "http://placehold.it/100/9e5156?text=BigPic",
			"followers": 30,
			"following": 125
		},
		"type": 2
	},
	{
		"address": "244 Plaza Street, Martinez",
		"img": "http://placehold.it/382x229/daffb3?text=244 Plaza Street, Martinez",
		"phone": 71196518398,
		"weather": {
			"title": "cupidatat consectetur ut",
			"icon": "cloudy.png",
			"water": 19,
			"temperature": 22
		},
		"social_info": {
			"title": "Pveniam&ea",
			"img": "http://placehold.it/100/59ceb3?text=BigPic",
			"followers": 128,
			"following": 32
		},
		"type": 2
	},
	{
		"address": "232 Orient Avenue, Cornfields",
		"img": "http://placehold.it/382x229/ecc2ff?text=232 Orient Avenue, Cornfields",
		"phone": 79128427515,
		"weather": {
			"title": "minim esse labore",
			"icon": "cloudy.png",
			"water": 25,
			"temperature": 28
		},
		"social_info": {
			"title": "Aet&cillum",
			"img": "http://placehold.it/100/cad2b1?text=BigPic",
			"followers": 45,
			"following": 78
		},
		"type": 3
	},
	{
		"address": "536 Nostrand Avenue, Rodanthe",
		"img": "http://placehold.it/382x229/ffa8c2?text=536 Nostrand Avenue, Rodanthe",
		"phone": 78483833857,
		"weather": {
			"title": "consequat laborum cupidatat",
			"icon": "cloudy.png",
			"water": 24,
			"temperature": 11
		},
		"social_info": {
			"title": "Onon_&_et",
			"img": "http://placehold.it/100/81eb4b?text=BigPic",
			"followers": 85,
			"following": 132
		},
		"type": 0
	},
	{
		"address": "174 Gunnison Court, Whitehaven",
		"img": "http://placehold.it/382x229/e3aeff?text=174 Gunnison Court, Whitehaven",
		"phone": 76864398615,
		"weather": {
			"title": "anim excepteur eu",
			"icon": "cloudy.png",
			"water": 11,
			"temperature": 32
		},
		"social_info": {
			"title": "Oveniam_exercitation",
			"img": "http://placehold.it/100/913da4?text=BigPic",
			"followers": 126,
			"following": 37
		},
		"type": 1
	},
	{
		"address": "699 Langham Street, Cobbtown",
		"img": "http://placehold.it/382x229/ec94ff?text=699 Langham Street, Cobbtown",
		"phone": 75415584792,
		"weather": {
			"title": "exercitation irure excepteur",
			"icon": "cloudy.png",
			"water": 26,
			"temperature": 18
		},
		"social_info": {
			"title": "Snon-exercitation",
			"img": "http://placehold.it/100/ff0344?text=BigPic",
			"followers": 17,
			"following": 56
		},
		"type": 0
	},
	{
		"address": "116 Grant Avenue, Snyderville",
		"img": "http://placehold.it/382x229/ffccdf?text=116 Grant Avenue, Snyderville",
		"phone": 75679636593,
		"weather": {
			"title": "et ad minim",
			"icon": "cloudy.png",
			"water": 19,
			"temperature": 15
		},
		"social_info": {
			"title": "Ddo_cupidatat",
			"img": "http://placehold.it/100/2cd8a7?text=BigPic",
			"followers": 58,
			"following": 23
		},
		"type": 1
	},
	{
		"address": "299 Vanderveer Street, Westmoreland",
		"img": "http://placehold.it/382x229/ffb494?text=299 Vanderveer Street, Westmoreland",
		"phone": 79706362333,
		"weather": {
			"title": "ullamco dolor dolor",
			"icon": "cloudy.png",
			"water": 29,
			"temperature": 22
		},
		"social_info": {
			"title": "Lsunt&non",
			"img": "http://placehold.it/100/f9e50e?text=BigPic",
			"followers": 99,
			"following": 78
		},
		"type": 1
	},
	{
		"address": "180 Franklin Avenue, Sharon",
		"img": "http://placehold.it/382x229/9effd1?text=180 Franklin Avenue, Sharon",
		"phone": 75325092997,
		"weather": {
			"title": "incididunt deserunt id",
			"icon": "cloudy.png",
			"water": 19,
			"temperature": 12
		},
		"social_info": {
			"title": "Msunt_&_nulla",
			"img": "http://placehold.it/100/5cefed?text=BigPic",
			"followers": 36,
			"following": 130
		},
		"type": 3
	},
	{
		"address": "582 Mermaid Avenue, Wyano",
		"img": "http://placehold.it/382x229/c7d1ff?text=582 Mermaid Avenue, Wyano",
		"phone": 75991776759,
		"weather": {
			"title": "et nostrud dolor",
			"icon": "cloudy.png",
			"water": 21,
			"temperature": 13
		},
		"social_info": {
			"title": "Ereprehenderit_&_eu",
			"img": "http://placehold.it/100/e5702e?text=BigPic",
			"followers": 100,
			"following": 158
		},
		"type": 0
	},
	{
		"address": "599 Henry Street, Wanship",
		"img": "http://placehold.it/382x229/ffddc7?text=599 Henry Street, Wanship",
		"phone": 74207783533,
		"weather": {
			"title": "magna culpa sint",
			"icon": "cloudy.png",
			"water": 29,
			"temperature": 28
		},
		"social_info": {
			"title": "Net aka ex",
			"img": "http://placehold.it/100/83c198?text=BigPic",
			"followers": 43,
			"following": 142
		},
		"type": 2
	},
	{
		"address": "909 Eckford Street, Boling",
		"img": "http://placehold.it/382x229/ff94fb?text=909 Eckford Street, Boling",
		"phone": 79037065873,
		"weather": {
			"title": "sint mollit officia",
			"icon": "cloudy.png",
			"water": 29,
			"temperature": 25
		},
		"social_info": {
			"title": "Dea aka magna",
			"img": "http://placehold.it/100/69afff?text=BigPic",
			"followers": 106,
			"following": 134
		},
		"type": 1
	},
	{
		"address": "229 Erskine Loop, Topaz",
		"img": "http://placehold.it/382x229/d1b3ff?text=229 Erskine Loop, Topaz",
		"phone": 76382555846,
		"weather": {
			"title": "non veniam do",
			"icon": "cloudy.png",
			"water": 25,
			"temperature": 21
		},
		"social_info": {
			"title": "Eest_minim",
			"img": "http://placehold.it/100/2e7bfb?text=BigPic",
			"followers": 110,
			"following": 26
		},
		"type": 2
	},
	{
		"address": "398 Campus Place, Harleigh",
		"img": "http://placehold.it/382x229/a3d2ff?text=398 Campus Place, Harleigh",
		"phone": 71861177360,
		"weather": {
			"title": "aliqua quis excepteur",
			"icon": "cloudy.png",
			"water": 15,
			"temperature": 29
		},
		"social_info": {
			"title": "Menim-elit",
			"img": "http://placehold.it/100/49f5dd?text=BigPic",
			"followers": 48,
			"following": 199
		},
		"type": 0
	},
	{
		"address": "703 Hart Place, Watchtower",
		"img": "http://placehold.it/382x229/ccfff2?text=703 Hart Place, Watchtower",
		"phone": 76405738245,
		"weather": {
			"title": "occaecat eu cupidatat",
			"icon": "cloudy.png",
			"water": 18,
			"temperature": 30
		},
		"social_info": {
			"title": "Dqui&fugiat",
			"img": "http://placehold.it/100/afb36a?text=BigPic",
			"followers": 90,
			"following": 200
		},
		"type": 0
	},
	{
		"address": "512 Bay Parkway, Carlton",
		"img": "http://placehold.it/382x229/85d1ff?text=512 Bay Parkway, Carlton",
		"phone": 76628755879,
		"weather": {
			"title": "sunt consectetur eu",
			"icon": "cloudy.png",
			"water": 14,
			"temperature": 26
		},
		"social_info": {
			"title": "Avoluptate_&_magna",
			"img": "http://placehold.it/100/5690f4?text=BigPic",
			"followers": 27,
			"following": 102
		},
		"type": 3
	},
	{
		"address": "500 Grattan Street, Deltaville",
		"img": "http://placehold.it/382x229/a3d7ff?text=500 Grattan Street, Deltaville",
		"phone": 75223438829,
		"weather": {
			"title": "pariatur tempor dolor",
			"icon": "cloudy.png",
			"water": 27,
			"temperature": 11
		},
		"social_info": {
			"title": "Slaborum anim",
			"img": "http://placehold.it/100/6a20b4?text=BigPic",
			"followers": 50,
			"following": 181
		},
		"type": 0
	},
	{
		"address": "185 Rutherford Place, Elliston",
		"img": "http://placehold.it/382x229/938fff?text=185 Rutherford Place, Elliston",
		"phone": 71424266418,
		"weather": {
			"title": "eu laboris occaecat",
			"icon": "cloudy.png",
			"water": 16,
			"temperature": 37
		},
		"social_info": {
			"title": "Mexercitation deserunt",
			"img": "http://placehold.it/100/e9564a?text=BigPic",
			"followers": 84,
			"following": 110
		},
		"type": 0
	}
];

export const places$: Observable<Place[]> = of(places)
	.pipe(delay(1000));
