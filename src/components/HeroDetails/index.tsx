import React from 'react';
import { Container, Column } from './styles';

interface HeroDetailsProps {
	hero: {
		id: number;
		name: string;
		description: string;
		thumbnail: {
			path: string;
			extension: string;
		};
	};
	onClose: () => void;
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ hero, onClose }) => {
	return (
		<Container>
			<img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
			<Column>
				<h2>{hero.name}</h2>
				{hero.description && <p>{hero.description}</p>}
				<button className='button' onClick={onClose}>
					Close
				</button>
			</Column>
		</Container>
	);
};

export default HeroDetails;
