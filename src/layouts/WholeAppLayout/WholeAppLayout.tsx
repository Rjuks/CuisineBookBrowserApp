import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const WholeAppLayout: FunctionComponent = (props): JSX.Element => (
  <StyledLayout>{props.children}</StyledLayout>
);

export const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
