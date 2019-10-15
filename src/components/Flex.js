import styled, { css } from 'styled-components';

export const flex = css`
  display: flex;
`;

export const Flex = styled.div`
  ${flex}
`;

export const flexMiddle = css`
  display: flex;
  align-items: center;
`;

export const FlexMiddle = styled.div`
  ${flexMiddle}
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FlexColumn = styled.div`
  ${flexColumn}
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnCenter = styled.div`
  ${flexColumnCenter}
`;

export const flexSpace = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexSpace = styled.div`
  ${flexSpace}
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexCenter = styled.div`
  ${flexCenter}
`;
