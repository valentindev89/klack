import { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [communitiesLoaded, setCommunitiesLoaded] = useState(false);
  const [channelLoaded, setChannelLoaded] = useState(false);
  const [chatLoaded, setChatLoaded] = useState(false);

  const appLoaded = userLoaded && communitiesLoaded && channelLoaded && chatLoaded;

  return (
    <AppContext.Provider
      value={{
        appLoaded,
        userLoaded,
        setUserLoaded,
        communitiesLoaded,
        setCommunitiesLoaded,
        channelLoaded,
        setChannelLoaded,
        chatLoaded,
        setChatLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider as default, AppContext };
