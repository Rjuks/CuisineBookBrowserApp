import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/photos/logo.jpg';
import { Text } from '../shared/Text/Text';
import { THEME_COLORS } from '../../styles/themeStyles';

export const Footer: React.FunctionComponent = () => (
  <StyledFooter>
    <StyledFooterBackground>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={THEME_COLORS.SECONDARY}
          fillOpacity="1"
          d="M0,128L1440,288L1440,320L0,320Z"
        ></path>
      </svg>
      <StyledFooterContent>
        <StyledFooterLogo src={LogoImage} />
      </StyledFooterContent>
    </StyledFooterBackground>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledFooterBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  svg {
    display: block;
  }
`;

const StyledFooterContent = styled.div`
  position: absolute;
  left: 10%;
  top: 65%;
  transform: translate(-65%, -10%);
  display: flex;
`;

const StyledFooterLogo = styled.img`
  width: 86px;
  height: 86px;
  padding: 4px;
  background-color: #fff;
  border-radius: 50%;
`;
