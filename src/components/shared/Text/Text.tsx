import React, { PropsWithChildren } from 'react';
import {
  getThemeColor,
  getThemeFontSize,
  ThemedColor,
  ThemedFontSize
} from '../../../styles/themeStyles';
import styled from 'styled-components';

type TextType = keyof Pick<
  JSX.IntrinsicElements,
  'span' | 'p' | 'em' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

export interface StyledTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  color?: ThemedColor;
  fontSize?: ThemedFontSize;
  fontWeight?: 400 | 700 | 900;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

interface OwnProps extends StyledTextProps {
  as?: TextType;
}

export type TextProps = PropsWithChildren<OwnProps>;

export const Text: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const { as, children, ...rest } = props;
  return (
    <StyledText as={as || 'p'} {...rest}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<StyledTextProps>`
  color: ${(props: StyledTextProps): string =>
    getThemeColor(props.color || 'GREY1')};
  font-size: ${(props: StyledTextProps): number =>
    getThemeFontSize(props.fontSize || 'TEXT_DEFAULT')}rem;
  font-weight: ${(props: StyledTextProps): number => props.fontWeight || 400};
  margin: 0;
  padding: 0;
  text-align: ${(props: StyledTextProps): string => props.textAlign || 'left'};
`;
