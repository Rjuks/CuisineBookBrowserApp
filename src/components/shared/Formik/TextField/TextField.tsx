import React, { ReactElement } from 'react';
import { ErrorMessage, FieldConfig, FieldProps, useField } from 'formik';
import styled from 'styled-components';

import { Text, TextProps } from '../../Text/Text';
import { THEME_COLORS } from '../../../../styles/themeStyles';

interface Props {
  labelProps: TextProps;
  icon?: unknown;
  placeholder?: string;
}

export const TextField = ({
  labelProps,
  icon,
  placeholder,
  ...props
}: FieldConfig & Props): ReactElement => {
  const [field] = useField<FieldProps>(props);

  const getIcon = icon ? icon : null;

  return (
    <StyledTextFieldWrapper>
      <label htmlFor={field.name}>
        <Text as="p" {...labelProps} />
      </label>
      <StyledInputWrapper>
        {getIcon}
        <input
          autoComplete="true"
          placeholder={placeholder}
          {...field}
          {...props}
        />
      </StyledInputWrapper>
      <ErrorMessage
        component="div"
        name={field.name}
        className="errorMessage"
      />
    </StyledTextFieldWrapper>
  );
};

const StyledTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 20px;
  }

  .errorMessage {
    color: red;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    border: 1px solid ${THEME_COLORS.SECONDARY};
    border-radius: 8px;
    margin: 8px 0;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    padding-left: 35px;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  svg {
    position: absolute;
    left: 0;
    top: 7px;
    font-size: 21px;
    padding: 9px 8px;
    color: ${THEME_COLORS.SECONDARY};
  }
`;
