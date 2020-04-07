import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PortalWrapper = ({ children, show, portalKey: newKey }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);
  const [key, setKey] = useState('');

  useEffect(() => {
    ref.current = document.getElementById('portal-root');
    if (show && key !== newKey) {
      ref.current.style.display = 'block';
      setMounted(true);
    } else {
      ref.current.style.display = 'none';
      setMounted(false);
    }
  }, [show]);

  return mounted ? createPortal(children, ref.current, key) : null;
};

export default PortalWrapper;
