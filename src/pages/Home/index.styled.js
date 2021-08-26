import { styled } from '../../stitches.config'

export const StyledHome = styled('div', {
	fontFamily: 'Poppins, sans-serif',
	height: '100%',
	width: '100%',
	position: 'relative',

	nav: {
		position: 'absolute',
		zIndex: '2',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '4.5rem',
		width: '100%',
		maxWidth: '100vw',
		background: '#3483eb',
		borderBottom: '0.1rem solid black',

		'.nav-links': {
			marginLeft: '1rem',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',

			'.logo': {
				fontSize: '2rem',
			},

			ul: {
				display: 'flex',
				flexDirection: 'row',

				li: {
					marginRight: '1rem',

					a: {
						color: '#FFF',
						fontFamily: 'Rubik, sans-serif',
					}
				}
			},
		},

		'.nav-login': {
			marginRight: '1rem',
			display: 'flex',
			flexDirection: 'row',

			ul: {
				marginRight: '2rem',

				a: {
					color: '#FFF',
					fontFamily: 'Rubik, sans-serif',
				}
			},
		}
	},

	main: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		background: 'linear-gradient(180deg, rgba(51,51,51,1) 0%, rgba(23,23,23,1) 100%)',

		'.slogan': {
			display: 'flex',
			position: 'relative',
			alignItems: 'center',
			flexDirection: 'column',

			'h2, h4': {
				color: '#111',
				padding: '1rem',
				background: 'linear-gradient(180deg, rgba(255,218,93,1) 0%, rgba(246,189,0,1) 100%)',
				borderRadius: '0.8rem',

				'@mobileL': {
					fontSize: '1.5rem',
					padding: '1rem',
				},

				'@tablet': {
					fontSize: '2rem',
					padding: '1.5rem',
				},

				'@laptop': {
					fontSize: '2.5rem',
					padding: '2rem',
				},
			},
		}
	}
})