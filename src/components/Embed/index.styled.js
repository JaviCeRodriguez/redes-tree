import { styled } from '@stitches/react';

export const StyledEmbed = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '5rem',
    backgroundColor: '#e36432',
    borderRadius: '0.65rem',
    overflow: 'hidden',
    boxShadow: '0 0 0.3rem 0.03rem rgba(0, 0, 0, 0.20)',

    h3: {
        color: 'white',
        fontFamily: 'Rubik, sans-serif',
        fontWeight: 500,
        marginLeft: '1rem'
    },
    
    img: {
        width: '10rem',
        objectFit: 'cover',
    }
})