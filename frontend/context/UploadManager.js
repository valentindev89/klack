import { useState, createContext, useEffect, useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPLOAD_FILE } from 'apis/File';

const UploadManagerContext = createContext({
  uploadQueue: [],
});

UploadManagerContext.displayName = 'UploadManager';

const UploadManagerProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [uploadQueue, setUploadQueue] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [maxSteps, setMaxStep] = useState(0);
  const [sendMessageStatus, setSendMessageStatus] = useState({
    label: '',
    step: 0,
  });

  useEffect(() => {
    const nextUpload = uploadQueue[0];
    if (nextUpload && !loading) {
      setLoading(true);
      setMaxStep(nextUpload.data.attachments.length + 4);
      setSendMessageStatus({ label: 'Message processing', step: 1 });

      const uploadList = nextUpload.data.attachments.map(async file => {
        const {
          data: {
            uploadFile: { Key },
          },
        } = await uploadFile({ variables: { file } });

        if (Key) {
          setSendMessageStatus(({ step }) => ({
            label: `${step - 2} / ${nextUpload.data.attachments.length}`,
            step: step + 1,
          }));
        }

        return Key;
      });

      setSendMessageStatus({ label: 'File uploading', step: 2 });

      const sendMessage = async () => {
        const filesUrlList = await Promise.all(uploadList);

        setSendMessageStatus(({ step }) => ({
          label: 'Message sending',
          step: step + 1,
        }));

        await nextUpload.onSendMessage(filesUrlList);
        setSendMessageStatus({
          label: 'Success',
          step: setSendMessageStatus.step + 1,
        });

        setMaxStep(0);
        setSendMessageStatus({
          label: '',
          step: 0,
        });
        setUploadQueue(currentQueue => currentQueue.slice(1));
        setLoading(false);
      };

      sendMessage();
    }
  }, [uploadQueue.length, loading]);

  const addUploadToQueue = useCallback(uploadItem => {
    setUploadQueue(currentQuery => [...currentQuery, uploadItem]);
  }, []);

  return (
    <UploadManagerContext.Provider
      value={{
        uploadQueue,
        addUploadToQueue,
        uploadProgress: {
          maxSteps,
          ...sendMessageStatus,
        },
      }}
    >
      {children}
    </UploadManagerContext.Provider>
  );
};

export { UploadManagerProvider as default, UploadManagerContext };
