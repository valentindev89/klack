import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { useEscapeToClose } from 'hooks';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import withAuth from 'utils/apollo/withAuth';
import { CREATE_CHANNEL, GET_CHANNELS } from 'apis/Channel';
import { COMPANY_NAME } from 'utils/config';

import Input from 'components/UI/Input/Input';
import { ButtonPrimary } from 'components/UI/Button';
import { BackIcon } from 'components/UI/Icons';

import * as S from './ChannelCreate.styled';

const initialValues = {
  name: '',
  description: '',
  isPrivate: false,
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .strict()
    .max(22, 'Must be shorter than 22 characters')
    .matches(/^[^.]+$/, 'Must contain no dots')
    .required('Name is required'),
});

const CreateChannel = () => {
  const router = useRouter();
  useEscapeToClose(router.back);

  const { community: communityUrl } = router.query;

  const [createChannel] = useMutation(CREATE_CHANNEL, {
    update(cache, { data: { createChannel: channel } }) {
      const { channels } = cache.readQuery({
        query: GET_CHANNELS,
        variables: {
          communityUrl,
        },
      });
      cache.writeQuery({
        query: GET_CHANNELS,
        variables: { communityUrl },
        data: { channels: channels.concat([channel]) },
      });
    },
  });

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    const channelUrl = values.name.toLowerCase().replace(' ', '-');
    const url = `${communityUrl}/${channelUrl}`;
    const { data } = await createChannel({
      variables: {
        communityUrl,
        url,
        ...values,
      },
      errorPolicy: 'all',
    });

    setSubmitting(false);
    if (!data) {
      setErrors({ name: 'Channel with this name already exists' });
    } else {
      router.push(`/[company]/[community]/[channel]`, `/${COMPANY_NAME()}/${url}`, {
        shallow: true,
      });
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <BackIcon onClick={() => router.back()} />
          <span style={{ marginTop: 3 }}>Create a channel</span>
        </S.Title>
      </S.Header>
      <S.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="name"
                label="Name"
                tip="Names must be without periods and shorter than 22 characters."
                placeholder="fun"
                component={Input}
                style={{ marginTop: 0 }}
                autoFocus
              />
              <Field
                type="text"
                name="description"
                label="Description"
                tip="What’s this channel about?"
                placeholder="For example: Why UX and UI should remain separate"
                component={Input}
              />
              <S.Footer>
                <ButtonPrimary
                  type="submit"
                  name="button"
                  disabled={isSubmitting}
                  style={{
                    // position: 'absolute',
                    right: 22,
                    marginTop: 12,
                    marginBottom: 16,
                    lineHeight: 'unset',
                  }}
                >
                  Create
                </ButtonPrimary>
              </S.Footer>
            </Form>
          )}
        </Formik>
      </S.Body>
    </S.Container>
  );
};

export default withAuth(CreateChannel);
