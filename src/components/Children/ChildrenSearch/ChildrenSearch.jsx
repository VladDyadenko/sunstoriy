import React, { useEffect, useState } from 'react';
import {
  BtnAddChild,
  BtnAddIcon,
  BtnIcon,
  FormButton,
  FormInput,
  SearchContainer,
  Wrapper,
} from './ChildrenSearch.styled';
import { CirclesWithBar } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChildren, fetchChildrenByName } from 'redux/child/childOperetion';
import { selectChildrenOperetion } from 'redux/child/childSelector';

const ChildrenSearch = ({ page }) => {
  const [userSearch, setUserSearch] = useState(() =>
    localStorage.getItem('currentChildSearch')
  );

  const dispatch = useDispatch();
  const operetion = useSelector(selectChildrenOperetion);

  const handleInputChange = e => {
    const userQuery = e.target.value.trim();
    setUserSearch(userQuery);
    localStorage.setItem('currentChildSearch', userQuery.toString());
  };

  const resetSearch = () => {
    setUserSearch('');
    localStorage.setItem('currentChildSearch', '');
  };
  useEffect(() => {
    if (userSearch?.length === 0) {
      dispatch(fetchChildren(page)).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else if (userSearch?.length >= 1) {
      dispatch(fetchChildrenByName(userSearch));
    }
  }, [dispatch, page, userSearch]);

  return (
    <SearchContainer>
      <Wrapper>
        <form>
          <FormInput
            type="text"
            value={userSearch}
            onChange={handleInputChange}
            placeholder="Пошук: почніть вводити ім'я"
          />
        </form>
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
      <BtnAddChild to={'/child'}>
        Додати дитину <BtnAddIcon />
      </BtnAddChild>
    </SearchContainer>
  );
};

export default ChildrenSearch;
