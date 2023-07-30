import md5 from 'crypto-js/md5';
import { FetchWrapper } from './fetchWrapper';

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

const API = new FetchWrapper('https://gateway.marvel.com');

interface Hero {
	id: number;
	name: string;
	description: string;
	thumbnail: {
		path: string;
		extension: string;
	};
}

function generateHash(ts: string) {
	const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
	return hash;
}

export async function searchHeroesByName(name: string): Promise<Hero[]> {
	const ts = new Date().getTime().toString();
	const hash = generateHash(ts);

	try {
		const response = await API.get(`/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
			.then((data) => data.data.results)
			.catch((error) => {
				console.error(error);
			});

		const responseData = await response;
		if (!responseData || responseData.length === 0) {
			throw new Error('No heroes found');
		}

		return response.map((result: Hero) => ({
			id: result.id,
			name: result.name,
			thumbnail: result.thumbnail,
		}));
	} catch (error) {
		console.error('Erro ao buscar heróis por nome:', error);
		throw new Error('Ocorreu um erro ao buscar heróis por nome');
	}
}

export async function getHeroDetails(heroId: number): Promise<Hero> {
	const ts = new Date().getTime().toString();
	const hash = generateHash(ts);

	try {
		const response = await API.get(`/v1/public/characters/${heroId}?&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
			.then((data) => data.data.results)
			.catch((error) => {
				console.error(error);
			});

		const responseData = await response;
		if (!responseData || responseData.length === 0) {
			throw new Error('No heroes found');
		}

		const result = response[0];

		return {
			id: result.id,
			name: result.name,
			description: result.description,
			thumbnail: result.thumbnail,
		};
	} catch (error) {
		console.error('Erro ao obter detalhes do herói:', error);
		throw new Error('Ocorreu um erro ao obter detalhes do herói');
	}
}
