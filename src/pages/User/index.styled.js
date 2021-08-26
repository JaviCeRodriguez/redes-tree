import { styled } from '../../stitches.config'

export const StyledUser = styled('div', {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    
    '@tablet': {
        height: '100%',
        flexDirection: "row",
    },

    '.container-embed': {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        alignContent: 'flex-start',
        justifyContent: 'space-evenly',
    }
})