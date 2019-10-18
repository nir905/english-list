import styled, { css } from "styled-components"
import media from "../style/media"

const normalContainer = css`
  max-width: ${({ stretchMobile }) => (stretchMobile ? "auto" : 450)}px;
  ${media.smallTablet`max-width: ${({ stretchMobile }) =>
    stretchMobile ? "auto" : 630}px;`};
  ${media.tablet`max-width: 850px;`};
  ${media.desktop`max-width: 1152px;`};
  ${media.mediumDesktop`max-width: 1344px;`};
`

const smallContainer = css`
  max-width: 344px;
  ${media.smallTablet`max-width: 430px;`};
  ${media.tablet`max-width: 610px;`};
  ${media.desktop`max-width: 650px;`};
  ${media.mediumDesktop`max-width: 660px;`};
`

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  ${({ small }) => (small ? smallContainer : normalContainer)};
`

export default Container
