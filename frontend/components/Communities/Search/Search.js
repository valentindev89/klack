import { useKeyboardShortcut } from 'hooks';
import closeIcon from 'public/icons/close.svg';
import { SearchIcon } from 'components/UI/Icons';
import * as S from './Search.styled';

const SearchInput = ({ show, close, value, onChange }) => {

  return (
    <S.SearchPanel show={show}>
      <S.SearchInput
        value={value}
        onChange={onChange}
        placeholder="Search Book by Title, Author, ISBN or Topic"
        autoFocus
      />
      <S.CloseWrapper onClick={close}>
        <S.CloseIcon>
          <use xlinkHref={`${closeIcon}#icon-close`} />
        </S.CloseIcon>
      </S.CloseWrapper>
    </S.SearchPanel>
  );
};

export default ({ searchString, setSearchString, isSearch, setSearch }) => {

  useKeyboardShortcut({
    F: () => setSearch(!isSearch),
  });

  return (
    <>
      <SearchInput
        show={isSearch}
        close={() => setSearch(false)}
        value={searchString}
        onChange={({ target: { value } }) => setSearchString(value)}
      />
      <SearchIcon
        onClick={() => {
          if (isSearch) {
            setSearch(false);
            setSearchString('');
          } else {
            setSearch(true);
          }
        }}
      />
    </>
  );
};
