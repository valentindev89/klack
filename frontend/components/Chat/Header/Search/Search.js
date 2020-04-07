import { useModal, useKeyboardShortcut } from 'hooks';
import SearchModal from 'components/UI/Modals/SearchModal';
import { SearchIcon } from 'components/UI/Icons';

const Search = () => {
  const {
    isShowing: isShowingSearch,
    toggle: toggleSearch,
    hide: hideSearch,
    show: showSearch,
  } = useModal();

  useKeyboardShortcut({
    F: showSearch,
  });

  return (
    <>
      <SearchIcon onClick={toggleSearch} />
      <SearchModal isShowing={isShowingSearch} toggle={toggleSearch} hide={hideSearch} />
    </>
  );
};

export default Search;
