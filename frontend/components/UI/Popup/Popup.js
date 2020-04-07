import { useEffect } from 'react';
import Checkbox from 'components/UI/Checkbox';
import * as S from './Popup.styled';

const CheckboxItem = ({ item }) => {
  return (
    <S.Item onClick={item.onClick}>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {item.icon}
        {item.label}
      </span>
      <Checkbox checked={item.active} />
    </S.Item>
  );
};

export default ({ opened, close, items = [], style = {} }) => {
  useEffect(() => {
    const listener = document.body.addEventListener('click', event => {
      const popupContainer = event.target.closest('.vs-popup');
      const iconContainer = event.target.closest('.vs-more-icon');
      if (!popupContainer && !iconContainer) {
        close();
      }
    });
    return () => document.body.removeEventListener('click', listener);
  }, []);

  return (
    <S.Container active={opened} className="vs-popup" style={style}>
      <S.List>
        {items.map(item => {
          if (item.type === 'separator') {
            return <S.Separator key={item.label} />;
          }

          if (item.type === 'checkbox') {
            return <CheckboxItem item={item} key={item.label} />;
          }

          return (
            <S.Item onClick={item.onClick} key={item.label}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {item.icon}
                {item.label}
              </span>
            </S.Item>
          );
        })}
      </S.List>
    </S.Container>
  );
};
