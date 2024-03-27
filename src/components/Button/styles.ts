import styled, { css } from "styled-components";

export type ButtonStyledProp = "TEXT" | "CONTAINED" | "OUTLINED" | "HIGHLIGHT";

type Props = {
  $variant: ButtonStyledProp;
};

export const Container = styled.button<Props>`
  width: 60px;
  height: 60px;
  -webkit-app-region: no-drag;

  border-radius: 20px;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.COLORS.GRAY_300};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  font-size: 24px;
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
  transition: all 0.2s;

  ${(props) =>
    props.$variant === "TEXT"
      ? css`
          background-color: transparent;
        `
      : props.$variant === "CONTAINED"
      ? css`
          background-color: ${props.theme.COLORS.GRAY_200};
        `
      : props.$variant === "OUTLINED"
      ? css`
          background-color: transparent;
          border: 1px solid ${props.theme.COLORS.GRAY_200};
        `
      : css`
          height: 142px;
          ${props.theme.COLORS.GRADIENT};
          color: #fff;

          &:hover {
            transform: scale(1.03);
          }
        `}
`;
