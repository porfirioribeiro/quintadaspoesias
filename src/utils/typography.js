import Typography from 'typography';
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Pacifico',
      styles: ['400'],
    },
    {
      name: 'Ubuntu',
      styles: ['400', '400i', '500', '500i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Ubuntu'],
  headerColor: '#4C4C4C',
  bodyFontFamily: ['Ubuntu'],
  bodyColor: '#4C4C4C',
  baseFontSize: `16px`,
  baseLineHeight: 1.45,
  blockMarginBottom: 0.75,
  scaleRatio: 2.15,
  overrideStyles: ({ rhythm, scale }, options) => ({
    [TABLET_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 17px.
      html: {
        fontSize: `${(17 / 16) * 100}%`,
      },
    },
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${(16 / 16) * 100}%`,
      },
    },
  }),
});

export const { rhythm, scale, options } = typography;
export default typography;
