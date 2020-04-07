import ReactDOM from 'react-dom';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import Link from 'next/link';
import { throttle } from 'lodash';
import Message from 'components/Chat/Message';
import { SEARCH_MESSAGES } from 'apis/Message';

import closeIcon from 'public/icons/close.svg';
import searchIcon from 'public/icons/search.svg';

import * as S from './styled';
import '../style.css';

const SearchModal = ({ isShowing, toggle }) => {
  const {
    query: { community, channel, company },
  } = useRouter();

  const [messages, setMessages] = useState([]);
  const [searchMessages] = useMutation(SEARCH_MESSAGES);

  useEffect(() => {
    setMessages([]);
  }, [isShowing]);

  const throttledSearch = useRef(
    throttle(value => {
      const search = async () => {
        if (!value) return setMessages([]);
        const messagesList = await searchMessages({
          variables: { searchQuery: value },
        });

        return setMessages(messagesList.data.messages);
      };

      search();
    }, 400)
  ).current;

  const handleSearch = e => {
    throttledSearch(e.target.value);
  };

  const renderPortal = () => {
    return (
      <>
        <S.ModalWrapper
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <S.Modal>
            <S.Header>
              <S.SearchIcon>
                <use xlinkHref={`${searchIcon}#icon-search`} />
              </S.SearchIcon>
              <S.Input onInput={handleSearch} placeholder="Search Message" autoFocus />
              <S.CloseIcon onClick={toggle}>
                <use xlinkHref={`${closeIcon}#icon-close`} />
              </S.CloseIcon>
            </S.Header>
            {messages.length > 0 && (
              <S.Messages>
                {messages.map(message => (
                  <Link
                    href={{
                      pathname: '/[company]/[community]/[channel]',
                      query: {
                        linkMessageId: message.id,
                      },
                    }}
                    as={`/${company}/${community}/${channel}`}
                    passHref
                    key={message.id}
                  >
                    <a onClick={toggle} key={message.id} style={{ textDecoration: 'none' }}>
                      <Message message={message} isPreview noActions />
                    </a>
                  </Link>
                ))}
              </S.Messages>
            )}
          </S.Modal>
        </S.ModalWrapper>
      </>
    );
  };
  return isShowing ? ReactDOM.createPortal(renderPortal(), document.body) : null;
};

export default SearchModal;
