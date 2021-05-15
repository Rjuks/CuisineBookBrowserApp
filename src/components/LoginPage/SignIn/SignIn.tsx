import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import { TextField } from '../../shared/TextField/TextField';
import { Text } from '../../shared/Text/Text';

import EmailIcon from '@material-ui/icons/Email';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface FormTypeProps {
  changeFormHandler: React.Dispatch<
    React.SetStateAction<'SIGNIN' | 'SIGNUP' | 'RECOVER_PASSWORD'>
  >;
  onSubmitHandler: (credentials: any) => void;
}

export const SignIn: React.FunctionComponent<FormTypeProps> = ({
  changeFormHandler,
  onSubmitHandler
}: FormTypeProps): ReactElement => {
  const validateFormValues = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  return (
    <StyledFormContainer>
      <Text
        as="h1"
        color="GREY2"
        textAlign="center"
        fontSize="TEXT_BIG"
        fontWeight={700}
      />
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validateFormValues}
        onSubmit={(values) => {
          onSubmitHandler(values);
        }}
      >
        {() => (
          <StyledForm>
            <Form>
              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="email"
                type="text"
                icon={<EmailIcon />}
                placeholder="name@email.com"
              />
              <TextField
                labelProps={{
                  fontSize: 'TEXT_DEFAULT',
                  fontWeight: 700,
                  color: 'GREY2'
                }}
                name="password"
                type="password"
                icon={<CheckCircleIcon />}
                placeholder="password"
              />
              <div className="additional-container">
                <Text as="span" fontSize="TEXT_DEFAULT" />
                <Text
                  className="cta-button"
                  onClick={() => changeFormHandler('RECOVER_PASSWORD')}
                  as="span"
                  fontSize="TEXT_DEFAULT"
                />
              </div>
              {/*<Button type="submit">{t('buttons.signInUser')}</Button>*/}
              <p>tutaj button</p>
            </Form>
          </StyledForm>
        )}
      </Formik>
      <div className="additional-container">
        <Text as="p" fontSize="TEXT_DEFAULT" />
        <Text
          className="cta-button"
          onClick={() => changeFormHandler('SIGNUP')}
          as="span"
          fontSize="TEXT_DEFAULT"
          fontWeight={700}
        />
      </div>
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  display: block;
  padding: 20px;
  background-color: red;

  .additional-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .cta-button {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;

  button {
    margin: 25px auto 20px auto;
  }

  span {
    text-align: center;
  }
`;
