import styled, { CreateStyled } from 'react-emotion';
import { TypographyOptions } from 'typography';
import { options } from './typography';

export const theme = {
  colors: {
    primary: '#4C149E',
    text: '#4C4C4C',
    textSecondary: '#989898',
  },
  fonts: {
    special: 'Pacifico',
  },
  options: options as Required<TypographyOptions>,
};

export type Theme = typeof theme;
export default styled as CreateStyled<Theme>;
