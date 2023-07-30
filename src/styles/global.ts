import styled from 'styled-components';

export const GlobalStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1399px;

	* {
		outline: 0;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	#root {
		margin: 0 auto;
	}
	h1 {
		text-align: center;
		padding: 0 0.5rem;
	}

	p {
		text-align: left;
		margin-top: 3rem;
		margin-left: 1rem;
		max-width: 500px;
		font-size: 1rem;
	}

	.button {
		text-transform: uppercase;
		background-color: #ff8900;
		border: 0 solid #e5e7eb;
		box-sizing: border-box;
		color: #000000;
		display: flex;
		font-family: ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		font-size: 1rem;
		font-weight: 700;
		justify-content: center;
		align-self: center;
		line-height: 1.75rem;
		position: relative;
		text-align: center;
		text-decoration: none #000000 solid;
		text-decoration-thickness: auto;
		max-width: 460px;
		padding: 0.3rem 0.8rem;
		position: relative;
		cursor: pointer;
		transform: rotate(-2deg);
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button:focus {
		outline: 0;
	}

	.button:after {
		content: '';
		position: absolute;
		border: 1px solid #fff;
		bottom: 4px;
		left: 4px;
		width: calc(100% - 1px);
		height: calc(100% - 1px);
	}

	.button:hover:after {
		bottom: 2px;
		left: 2px;
	}
`;

export const Logo = styled.img`
	width: 130px;
	height: 52px;
	margin: 3.125rem auto 0;
`;

export const Loader = styled.div`
	width: 48px;
	height: 48px;
	border: 5px solid #fff;
	border-bottom-color: #ff3d00;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
	margin-top: 5rem;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
