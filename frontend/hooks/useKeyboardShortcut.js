import { useEffect } from 'react';

export default function useKeyboardShortcut(keyMap) {
  useEffect(() => {
    function handleKeyPress(e) {
      if (!e.shiftKey) {
        return;
      }

      const callback = keyMap[e.key];
      if (callback) {
        callback();
      }
    }
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  });
}
