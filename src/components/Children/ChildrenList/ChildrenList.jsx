import React from 'react';
import { ChildrenListWrapper } from './ChildrenList.styled';
import ChildrenCard from '../ChildrenCard/ChildrenCard';

function ChildrenList({ allChildren }) {
  console.log(allChildren);

  return (
    <ChildrenListWrapper>
      {allChildren?.map(child => {
        return <ChildrenCard key={child._id} child={child} />;
      })}
    </ChildrenListWrapper>
  );
}

export default ChildrenList;
