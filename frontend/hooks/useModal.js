import { useState, useEffect } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  function toggle() {
    setShowModal(!showModal);
  }

  const onKeyDown = e => {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (process.browser) {
      window.addEventListener('keydown', onKeyDown);
      return () => {
        window.removeEventListener('keydown', onKeyDown);
      };
    }
    return window.removeEventListener('keydown', onKeyDown);
  }, []);

  return {
    isShowing: showModal,
    toggle,
    hide: () => setShowModal(false),
    show: () => setShowModal(true),
  };
};

export default useModal;
