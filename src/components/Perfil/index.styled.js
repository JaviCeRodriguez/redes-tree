import { styled } from '@stitches/react';

export const StyledPerfil = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1em',
    backgroundColor: '#3483eb',
    boxShadow: '0.05rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2)',
    width: '15rem',
    minWidth: '15rem',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rubik, sans-serif',

    img: {
        width: '9rem',
        height: '9rem',
        borderRadius: '100%',
        boxShadow: '0 0 0.4rem rgba(0, 0, 0, 0.8)'
    },

    '.info-user': {
        h3: {
            fontSize: '1.5rem',
        },
        h4: {
            fontSize: '1.1rem',
            fontWeight: '500'
        },
        p: {
            fontSize: '0.9rem',
            lineHeight: '1.5rem',
            a: {
                color: '#FFF',
                '&:hover': {
                    color: '#DDD'
                }
            }
        }
    }
});