import React, { useEffect, useState } from 'react';
import { FormButton, FormInput, Wrapper } from './ChildrenSearch.styled';

const ChildrenSearch = ({ allChildren, setVisibleListChildren }) => {
  const [userSearch, setUserSearch] = useState('');

  const handleInputChange = e => {
    const userQuery = e.target.value.trim();
    setUserSearch(userQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userQuery = userSearch.trim();
    setVisibleListChildren(userQuery);
  };

  useEffect(() => {
    const visibleChildrenList = allChildren?.filter(child => {
      if (userSearch === '') {
        return true;
      }
      const searchLowerCase = userSearch.toLowerCase();
      const nameLowerCase = child.name.toLowerCase();
      if (searchLowerCase.length > nameLowerCase.length) {
        return false;
      }
      for (let i = 0; i < searchLowerCase.length; i++) {
        if (searchLowerCase[i] !== nameLowerCase[i]) {
          return false;
        }
      }

      return true;
    });
    setVisibleListChildren(visibleChildrenList);
  }, [allChildren, setVisibleListChildren, userSearch]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={userSearch}
          onChange={handleInputChange}
          placeholder="Почніть вводити ім'я дитини"
        />
      </form>
      <FormButton type="submit">Пошук</FormButton>
    </Wrapper>
  );
};

export default ChildrenSearch;
