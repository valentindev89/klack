import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { ButtonPrimary } from 'components/UI/Button/Button';
import { Input } from 'components/UI/Input';
import { UserContext } from 'context/UserContext';
import Router from 'next/router';
import Cookies from 'js-cookie';
import { COMPANY_NAME } from 'utils/config';
import { SIGNUP } from 'apis/User';
import SimpleCrypto from 'simple-crypto-js';
import * as S from './styled';

const initialValues = {
  username: '',
  fullname: '',
  bio: '',
  email: '',
  password: '',
};
const BACKEND_URL = 'http://localhost:4000';
const FRONTEND_URL = 'http://localhost:3000';

const SignUp = () => {
  const { signin } = useContext(UserContext);
  const client = useApolloClient();

  const onCompleted = data => {
    Cookies.set('token', data.signup.token);

    signin(data.signup.token);
    // Force a reload of all the current queries now that the user is logged in
    client.cache.reset().then(() => {
      setTimeout(function() {
        Router.push(`/${COMPANY_NAME()}/general/general`);
      }, 500);
    });
  };

  const onError = error => {
    // If you want to send error to external service?
    console.error(error);
  };

  const [signup, { error }] = useMutation(SIGNUP, { onCompleted, onError });

  const onSubmit = ({ fullname, username, email, password, bio }, { setSubmitting }) => {
    setSubmitting(true);
    signup({
      variables: {
        fullname,
        username,
        email,
        password,
        bio,
      },
    });
    setSubmitting(false);
  };

  const getId = () => {
    const _secretKey = 'klacksecret!@#';
    const simpleCrypto = new SimpleCrypto(_secretKey);
    console.log(simpleCrypto.encrypt(`${FRONTEND_URL}/klack/general/general`));
  };
  return (
    <S.Container>
      <S.Form>
        <div />
        <div style={{ marginTop: -150 }}>
          <S.Heading>Sign Up</S.Heading>
          <S.Paragraph>To continue, create an account</S.Paragraph>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="text"
                  name="fullname"
                  label="Full name"
                  placeholder="Enter your full name"
                  component={Input}
                />
                <Field
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  component={Input}
                />
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter email address"
                  component={Input}
                />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="********"
                  component={Input}
                />
                <Field
                  type="text"
                  name="bio"
                  label="Bio"
                  placeholder="About yourselfs. You can edit this later"
                  component={Input}
                />
                <S.Footer>
                  <ButtonPrimary
                    type="submit"
                    name="button"
                    disabled={isSubmitting}
                    style={{ marginLeft: 0 }}
                  >
                    {isSubmitting ? 'Creating an account' : 'Sign up'}
                  </ButtonPrimary>
                </S.Footer>
              </Form>
            )}
          </Formik>
          <button type="button" name="button" onClick={getId} style={{ marginLeft: 0 }}>
            Get Code
          </button>
          {error && <p>Issue occurred while registering :(</p>}
        </div>
        <i />
      </S.Form>
      <S.Image />
    </S.Container>
  );
};

export default SignUp;
