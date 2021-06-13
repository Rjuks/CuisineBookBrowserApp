import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { THEME_COLORS } from '../../../styles/themeStyles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 12px 32px;
  color: ${THEME_COLORS.GREY2};
  font-size: 0.8em;
  font-weight: bold;
  background-color: ${(props) => props.color || 'white'};
  border: 1px solid ${THEME_COLORS.PRIMARY};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;

  :disabled {
    opacity: 0.4;
  }
  &:hover {
    transform: scale(1.02);
    background-color: ${THEME_COLORS.PRIMARY};
    color: #fff;
  }
`;

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  ...rest
}: ButtonProps): ReactElement => (
  <StyledButton onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);
