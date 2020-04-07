import { useState, useEffect } from 'react';

import Landing from './Landing/Landing';
import Widget from './Widget/Widget';
import WidgetIcon from './WidgetIcon/WidgetIcon';

const openSound = 'widget-open';
const closeSound = 'widget-close';

export default () => {
  const widgetUrl = `${process.env.FRONTEND_URL}/vs/general/general`;
  const [widgetOpened, setWidgetOpened] = useState(false);

  const playSound = sound => {
    if (process.browser) {
      document.getElementById(sound).play();
    }
  };

  const openWidget = () => {
    playSound(openSound);
    setWidgetOpened(true);
  };

  useEffect(() => {
    if (document) {
      document.onkeyup = e => {
        if (e.key === 's') {
          playSound(openSound);
          setWidgetOpened(!widgetOpened);
        }
      };
    }
  }, []);

  useEffect(() => {
    const onClose = window.addEventListener(
      'message',
      event => {
        if (event.data.message === 'close-widget') {
          playSound(closeSound);
          setWidgetOpened(false);
        }
      },
      false
    );
    return () => window.removeEventListener('message', onClose);
  }, []);

  return (
    <Landing>
      <WidgetIcon openWidget={openWidget} show={!widgetOpened} />
      <Widget widgetUrl={widgetUrl} show={widgetOpened} />
    </Landing>
  );
};
