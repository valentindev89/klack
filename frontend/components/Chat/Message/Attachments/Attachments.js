// Temp: Prettier bug
/* eslint-disable react/jsx-indent */
import { awsUrl } from 'utils/helper';

// TODO: refactor igor shit. wrong styles

import AttachmentItem from './Attachment/Item';
import AttachmentImage from './Attachment/Image';
import AttachmentRemote from './Attachment/Remote';

import * as S from './Attachments.styled';

export default ({ attachments, remoteAttachments }) => {
  return (
    <>
      {attachments && !!attachments.length && (
        <S.Attachments>
          {attachments.findIndex(({ mimetype }) => !mimetype.includes('image/')) !== -1
            ? attachments.map(({ filename, Key, mimetype, filesize }) => (
                <AttachmentItem
                  url={awsUrl + Key}
                  filename={filename}
                  filesize={filesize}
                  mimetype={mimetype}
                  key={Key}
                />
              ))
            : attachments.map(({ Key }) => <AttachmentImage url={awsUrl + Key} key={Key} />)}
        </S.Attachments>
      )}
      {remoteAttachments && !!remoteAttachments.length && (
        <S.Attachments>
          {remoteAttachments.map(attachment => (
            <AttachmentRemote attachment={attachment} key={attachment.id} />
          ))}
        </S.Attachments>
      )}
    </>
  );
};
