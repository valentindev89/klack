import { useEffect } from 'react';

export default function useEscapeToClose(onClose) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
}
