import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/Navbar/Navbar';

export const WholeAppLayout: FunctionComponent = (props): JSX.Element => (
  <StyledLayout>
    <Navbar />
    {props.children}
  </StyledLayout>
);

export const StyledLayout = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
