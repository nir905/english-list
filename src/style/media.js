import { css } from 'styled-components';

export const defaultMediaBreakpoints = {
  smallTablet: '670px',
  tablet: '1014px',
  desktop: '1280px',
  mediumDesktop: '1470px',
};

const media = Object.keys(defaultMediaBreakpoints).reduce(
  (memo, val) => ({
    ...memo,
    [val]: (...args) => css`
      @media (min-width: ${defaultMediaBreakpoints[val]}) {
        ${css(...args)};
      }
    `,
  }),
  {},
);

export default media;
