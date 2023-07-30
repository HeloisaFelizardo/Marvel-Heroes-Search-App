import React, { useState } from 'react';
import { GlobalStyle, Logo, Loader } from './styles/global';
import HeroSearch from './components/HeroSearch';
import HeroList from './components/HeroList';
import HeroDetails from './components/HeroDetails';
import { searchHeroesByName, getHeroDetails } from './api/marvelApi';

const logo: string = require('./logo.svg').default;

const App: React.FC = () => {
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [selectedHero, setSelectedHero] = useState<any | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const clearResultsAndHero = () => {
		setSearchResults([]);
		setSelectedHero(null);
	};

	const handleSearch = async (value: string) => {
		if (value.trim() === '') {
			setErrorMessage('Digite um nome de herói válido!');
			clearResultsAndHero();
			return;
		}

		setErrorMessage(null);
		setLoading(true);

		try {
			const heroes = await searchHeroesByName(value);
			setSearchResults(heroes);
		} catch (error) {
			setErrorMessage('Esse herói não existe!');
			clearResultsAndHero();
		} finally {
			setLoading(false);
		}

		handleHeroClose();
	};

	const handleHeroClick = async (heroId: number) => {
		setLoading(true);

		try {
			const hero = await getHeroDetails(heroId);
			setSelectedHero(hero);
			setErrorMessage(null);
		} catch (error) {
			setErrorMessage('Erro ao obter detalhes do herói');
		} finally {
			setLoading(false);
		}
	};

	const handleHeroClose = () => {
		setSelectedHero(null);
	};

	return (
		<GlobalStyle>
			<Logo src={logo} alt='logo' />
			<h1>Heroes Search</h1>
			<HeroSearch onSearch={handleSearch} errorMessage={errorMessage} setSearchValue={() => {}} />
			{loading && <Loader />} {/* Loader para o carregamento geral */}
			{errorMessage && !searchResults.length && !loading && <p className='error-message'>{errorMessage}</p>}
			{!errorMessage && !selectedHero && !loading && <HeroList heroes={searchResults} onItemClick={handleHeroClick} />}
			{!errorMessage && selectedHero && !loading && <HeroDetails hero={selectedHero} onClose={handleHeroClose} />}
		</GlobalStyle>
	);
};

export default App;
