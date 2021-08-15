import { styled } from '@stitches/react';

export const StyledUser = styled('div', {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: '100%',

    '.container-embed': {
        width: '100%',
        padding: '0.4rem 0.62rem',
        display: 'flex',
        flexFlow: 'row wrap',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    }
})