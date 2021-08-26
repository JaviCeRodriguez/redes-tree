import { createCss } from '@stitches/react';

export const { styled, css } = createCss({
	media: {
		mobileM: '(min-width: 375px)',
		mobileL: '(min-width: 425px)',
		tablet: '(min-width: 768px)',
		laptop: '(min-width: 1024px)',
		laptopL: '(min-width: 1440px)',
  },
});