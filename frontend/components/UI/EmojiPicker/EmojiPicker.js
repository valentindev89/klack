import { useEffect } from 'react';
import { Picker } from 'emoji-mart';
import { withTheme } from 'styled-components';
import 'emoji-mart/css/emoji-mart.css';

import * as S from './styled';

const availableEmojis = [
  'grinning',
  'smiley',
  'smile',
  'grin',
  'laughing',
  'sweat_smile',
  'rolling_on_the_floor_laughing',
  'joy',
  'slightly_smiling_face',
  'upside_down_face',
  'wink',
  'blush',
  'innocent',
];

const EmojiPicker = ({ close, onSelect, theme, getPosition }) => {
  return (
    <S.Overlay onClick={close}>
      <S.Container id="picker" position={getPosition()}>
        <Picker
          set="apple"
          emojisToShowFilter={emoji => {
            const name = emoji.short_names[0];

            if (availableEmojis.indexOf(name) > -1) {
              return true;
            }
            return false;
          }}
          include={['recent', 'people']}
          onSelect={onSelect}
          showPreview={false}
          showSkinTones={false}
          native
          theme={theme.chatBG === '#fff' ? 'light' : 'dark'}
        />
      </S.Container>
    </S.Overlay>
  );
};

export default withTheme(EmojiPicker);
