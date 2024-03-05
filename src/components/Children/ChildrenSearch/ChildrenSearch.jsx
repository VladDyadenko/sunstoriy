import React, { useEffect, useState } from 'react';
import {
  BtnAddChild,
  BtnAddIcon,
  SearchContainer,
} from './ChildrenSearch.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChildren, fetchChildrenByName } from 'redux/child/childOperetion';
import { selectChildrenOperetion } from 'redux/child/childSelector';
import SearchModule from 'ui/SearchModule/SearchModule';

const ChildrenSearch = ({ page }) => {
  const [userSearch, setUserSearch] = useState(() =>
    localStorage.getItem('currentChildSearch')
  );

  const dispatch = useDispatch();

  const operetion = useSelector(selectChildrenOperetion);

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
      <SearchModule
        operetion={operetion}
        userSearch={userSearch}
        setUserSearch={setUserSearch}
      />
      <BtnAddChild to={'/child'}>
        Додати дитину <BtnAddIcon />
      </BtnAddChild>
    </SearchContainer>
  );
};

export default ChildrenSearch;
