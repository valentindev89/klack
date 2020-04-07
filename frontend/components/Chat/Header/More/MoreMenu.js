import { useState } from 'react';
import { MoreIcon } from 'components/UI/Icons';
import MorePopup from './MorePopup/MorePopup';

export default () => {
  const [showMorePopup, setShowMorePopup] = useState(false);

  return (
    <>
      <MoreIcon active={showMorePopup} onClick={() => setShowMorePopup(!showMorePopup)} />
      <MorePopup opened={showMorePopup} close={() => setShowMorePopup(false)} />
    </>
  );
};
