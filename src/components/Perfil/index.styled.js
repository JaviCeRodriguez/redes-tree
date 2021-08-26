import { styled } from '../../stitches.config'

export const StyledPerfil = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#3483eb',
    boxShadow: '0.05rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '10rem',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rubik, sans-serif',

    '@tablet': {
        flexDirection: "column",
        width: '15rem',
        minWidth: '15rem',
        height: '100%',
    },

    img: {
        width: '6rem',
        height: '6rem',
        borderRadius: '100%',
        boxShadow: '0 0 0.4rem rgba(0, 0, 0, 0.8)',

        '@mobileL': {
            width: '7.5rem',
            height: '7.5rem',
        },

        '@tablet': {
            width: '9rem',
            height: '9rem',
        },
    },

    '.info-user': {
        'h3, h4': {
            margin: '0.8rem 0rem',
        },

        h3: {
            fontSize: '1.5rem',
        },

        h4: {
            fontSize: '1.1rem',
            fontWeight: '500'
        },

        p: {
            fontSize: '0.9rem',
            a: {
                color: '#FFF',
                '&:hover': {
                    color: '#DDD'
                }
            }
        }
    }
});