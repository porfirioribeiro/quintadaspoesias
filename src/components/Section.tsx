import styled from '../utils/theme';

export const Section = styled.section(({ theme }) => ({
  maxWidth: theme.size.sectionMaxWidth,
  margin: '0 auto',
  padding: `3% ${theme.size.sectionMargin}px`,
  paddingTop: 'calc(3% + 72px)',
  marginTop: '-72px',
  h2: {
    fontSize: 40,
    fontFamily: theme.fonts.special,
    fontWeight: 'normal',
    color: theme.colors.primary,
  },
}));
