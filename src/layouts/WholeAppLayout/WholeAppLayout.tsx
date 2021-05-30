import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

export const WholeAppLayout: FunctionComponent = (props): JSX.Element => (
  <StyledLayout>
    <Navbar />
    <StyledLayoutContent>{props.children}</StyledLayoutContent>
    <Footer />
  </StyledLayout>
);

export const StyledLayout = styled.div`
  display: block;
  position: relative;
  min-height: 100vh;
`;

export const StyledLayoutContent = styled.div`
  margin: 0 auto;
  padding-bottom: 440px;
`;
