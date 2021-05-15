import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Form, Formik } from 'formik';

// import { passwordRegExp } from '../../../services/validators/validators';
import { Text } from '../../shared/Text/Text';
import { TextField } from '../../shared/TextField/TextField';

// @todo: If comment is needed please translate to english, if not please remove
// ma przeniesc do strny z jednym inputem
// zeby wprowadzic email
// klikam butotn recover pass
// przenosi na strone -> check yout email
const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: red;

  h1 {
    text-align: center;
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;

  button {
    margin: 25px auto 20px auto;
  }
`;

export const RecoverPasswordForm: React.FunctionComponent = () => {
  const validateFormValues = Yup.object({
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,30}$/,
        'Must contain 8 characters. One uppercase, one lowercase, one number and one special case character'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('You need to confirm password')
      .oneOf([Yup.ref('password')], 'Passwords must match')
  });

  return (
    <StyledFormContainer>
      <Text as="h1" />
      <Formik
        initialValues={{
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validateFormValues}
        onSubmit={(values) => {
          alert(`${values.password} ${values.confirmPassword}`);
        }}
      >
        {() => (
          <StyledForm>
            <Form>
              <TextField
                labelProps={{ fontSize: 'TEXT_DEFAULT' }}
                name="password"
                type="text"
              />
              <TextField
                labelProps={{ fontSize: 'TEXT_DEFAULT' }}
                name="confirmPassword"
                type="text"
              />
              {/*<Button type="submit">{t('buttons.restorePassword')}</Button>*/}
              <p>button</p>
            </Form>
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};
