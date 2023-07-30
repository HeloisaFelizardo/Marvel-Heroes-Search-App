import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;

	@media (min-width: 992px) {
		flex-direction: row;
		align-items: flex-start;
		background-color: rgba(138, 138, 138, 0.3);
		border-radius: 0.2rem;
	}
	img {
		width: 100%;
		max-width: 500px;
		border-radius: 0.2rem;
		border: 1px solid #000;
	}
	h2 {
		text-align: center;
	}
	p {
		margin-top: 0 !important;
		margin-left: 0 !important;
	}
	button {
		top: 1rem;
		margin-bottom: 3rem;
	}
	@media (min-width: 992px) {
		margin-top: 3rem;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media (min-width: 992px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 2rem;

		h2 {
			align-self: flex-start;
			margin-top: 0;
		}

		button {
			top: 10rem;
		}
	}
`;
