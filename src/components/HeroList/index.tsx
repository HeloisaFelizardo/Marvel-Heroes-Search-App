import React from 'react';
import { List, ListItem } from './styles';

interface HeroListProps {
	heroes: {
		id: number;
		name: string;
		thumbnail: {
			path: string;
			extension: string;
		};
	}[];
	onItemClick: (heroId: number) => void;
}

const HeroList: React.FC<HeroListProps> = ({ heroes, onItemClick }) => {
	const filteredHeroes = heroes.filter((hero) => !hero.thumbnail.path.includes('image_not_available'));

	if (filteredHeroes.length === 0 && heroes.length > 0) {
		return <p>Esse herói não está disponível na base de dados.</p>;
	}

	return (
		<List>
			{filteredHeroes.map((hero) => {
				return (
					<ListItem key={hero.id} onClick={() => onItemClick(hero.id)}>
						<img src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
						<p>{hero.name}</p>
					</ListItem>
				);
			})}
		</List>
	);
};

export default HeroList;
