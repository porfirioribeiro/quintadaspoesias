import styled, { CreateStyled } from 'react-emotion';
import { TypographyOptions } from 'typography';
import { options } from './typography';

const breakpoints = {
  xl: 1600,
  lg: 1280,
  md: 980,
  sm: 768,
  xs: 480,
};

type Breakpoint = keyof typeof breakpoints;

const modifiers = { lt: 'max-width', gt: 'min-width' };
type Modifier = keyof typeof modifiers;

type MQOptions = { [x in Modifier]?: Breakpoint | number };

export function mq(...os: (MQOptions | Breakpoint)[]): string {
  return `@media ${os
    .map(o => {
      const m = typeof o === 'string' ? { lt: o } : o;
      return `${(Object.keys(m) as Modifier[])
        .map(
          s =>
            `(${modifiers[s]}:${
              typeof m[s] === 'number' ? m[s] : breakpoints[m[s] as Breakpoint]
            }px)`
        )
        .join(' and ')}`;
    })
    .join(', ')}`;
}

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
  size: {
    width: 1245,
    sectionMaxWidth: 1345,
    sectionMargin: 50,
  },
  breakpoints,
  mq,
};

export type Theme = typeof theme;
export default styled as CreateStyled<Theme>;
