import { BtnIcon, FormButton, FormInput, Wrapper } from './SearchModule.styled';
import { CirclesWithBar } from 'react-loader-spinner';

const SearchModule = ({ operetion, userSearch, setUserSearch }) => {
  const handleInputChange = e => {
    const userQuery = e.target.value.trim();
    setUserSearch(userQuery);
    localStorage.setItem('currentChildSearch', userQuery.toString());
  };

  const resetSearch = () => {
    setUserSearch('');
    localStorage.setItem('currentChildSearch', '');
  };
  return (
    <Wrapper>
      <FormInput
        type="text"
        name="searchChild"
        value={userSearch ? userSearch : ''}
        onChange={handleInputChange}
        placeholder="Пошук: почніть вводити ім'я"
      />
      <FormButton type="button" onClick={resetSearch}>
        {operetion === 'fatchChildByName' ? (
          <CirclesWithBar
            height="25"
            width="50"
            color="#ffffff"
            wrapperStyle={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        ) : (
          <BtnIcon />
        )}
      </FormButton>
    </Wrapper>
  );
};

export default SearchModule;
