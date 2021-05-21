import React, { ReactElement } from 'react';
import { ErrorMessage, FieldConfig, FieldProps, useField, Field } from 'formik';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { Text } from '../../Text/Text';
import { THEME_COLORS } from '../../../../styles/themeStyles';
import { DropdownOption } from '../../../../types/commonTypes';

interface Props {
  options: DropdownOption[];
  icon?: unknown;
}

export const SelectInputFormik = ({
  options,
  icon,
  ...props
}: FieldConfig & Props): ReactElement => {
  const [field] = useField<FieldProps>(props);

  const getIcon = icon ? icon : null;
  return (
    <StyledTextFieldWrapper>
      <label htmlFor={field.name}>
        <Text as="p" />
      </label>
      <StyledInputWrapper>
        {getIcon}
        <Field as="select" id={field.name} {...props} {...field}>
          {options.map((option: DropdownOption) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
        <KeyboardArrowDownIcon className="selectInput_arrow" />
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

  select {
    width: 100%;
    border: 1px solid ${THEME_COLORS.SECONDARY};
    border-radius: 8px;
    margin: 8px 0;
    outline: none;
    color: ${THEME_COLORS.TERTIARY};
    font-weight: bold;
    padding: 10px;
    box-sizing: border-box;
    padding-left: 32px;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  svg:first-of-type {
    position: absolute;
    left: 0;
    top: 8px;
    font-size: 21px;
    padding: 9px 8px;
    color: ${THEME_COLORS.SECONDARY};
  }

  .selectInput_arrow {
    position: absolute;
    right: 0;
    top: 8px;
    font-size: 21px;
    padding: 9px 8px;
    color: ${THEME_COLORS.GREY2};
  }
`;
