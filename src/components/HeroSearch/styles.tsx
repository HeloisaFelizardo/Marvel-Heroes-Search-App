import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		margin-right: 1rem;
		padding: 0.5rem;
		width: 100%;
		max-width: 230px;
		border-radius: 0.2rem;
	}

	input:focus {
		outline: none;
		box-shadow: 0.2rem 0.2rem 1rem rgba(255, 137, 0, 0.6);
	}
`;
