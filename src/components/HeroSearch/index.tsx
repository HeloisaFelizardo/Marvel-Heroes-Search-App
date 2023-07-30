import React, { useState } from 'react';
import { Container } from './styles';

interface HeroSearchProps {
	onSearch: (value: string) => void;
	setSearchValue: (value: string) => void;
	errorMessage?: string | null;
}

const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch, setSearchValue }) => {
	const [searchValue, setSearchValueLocal] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValueLocal(event.target.value);
		setSearchValue(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onSearch(searchValue);
		}
	};

	const handleButtonClick = () => {
		onSearch(searchValue);
	};

	return (
		<Container>
			<input type='text' onChange={handleChange} onKeyPress={handleKeyPress} />
			<button className='button' onClick={handleButtonClick}>
				Search
			</button>
		</Container>
	);
};

export default HeroSearch;
