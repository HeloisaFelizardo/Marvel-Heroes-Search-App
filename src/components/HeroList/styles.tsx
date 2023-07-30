import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const List = styled.ul`
	list-style-type: none;
	padding: 0;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 3rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: 7.5rem;
	margin: 0.5rem;

	img {
		margin-bottom: 0.5rem;
		border-radius: 0.2rem;
	}
	p {
		margin-top: 0;
		margin-left: 0;
	}
`;
