import { styled } from '@stitches/react';

export const StyledHome = styled('div', {
    fontFamily: 'Poppins, sans-serif',
    height: '100%',
    width: '100%',
    position: 'relative',

    nav : {
        position: 'absolute',
        zIndex: '2',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4.5rem',
        width: '100%',
        maxWidth: '100vw',
        background: '#115aba',

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
        fontSize: '2rem',
        height: '100%',
        width: '100%',
        backgroundColor: '#333',

        '&::before': {    
            position: 'absolute',
            content: "",
            backgroundImage: 'url("https://wmarketingdigital.com/wp-content/uploads/2017/07/social-media.jpg")',
            backgroundSize: 'cover',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: '0.65',
        },

        '.slogan': {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            flexDirection: 'column',

            'h2, h3': {
                color: '#111',
                background: 'linear-gradient(180deg, rgba(255,218,93,1) 0%, rgba(246,189,0,1) 100%)',
                padding: '2rem',
                borderRadius: '0.8rem',
            },
        }
    }
})