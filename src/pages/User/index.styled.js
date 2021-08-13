import { styled } from '@stitches/react';

export const StyledUser = styled('div', {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    '.container-embed': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '22rem'
    }
})