import React, { useEffect, useState } from 'react';
import {
  ChildrenListPagination,
  ChildrenListWrapper,
} from './ChildrenList.styled';
import ChildrenCard from '../ChildrenCard/ChildrenCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectChildren,
  selectChildrenMarker,
  selectChildrenPagination,
} from 'redux/child/childSelector';
import { fetchChildren } from 'redux/child/childOperetion';

function ChildrenList({ page, setPage }) {
  const [pageCount, setPageCount] = useState(1);

  const pagination = useSelector(selectChildrenPagination);
  const children = useSelector(selectChildren);
  const marker = useSelector(selectChildrenMarker);

  const dispatch = useDispatch();

  useEffect(() => {
    setPageCount(pagination?.pageCount);
  }, [pagination]);

  useEffect(() => {
    dispatch(fetchChildren(page)).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [dispatch, page]);

  useEffect(() => {
    if (marker === 'fetchChildComplit') {
      if (children.length === 0 && page > 1) {
        setPage(page - 1);
        localStorage.setItem('currentChildrenPage', (page - 1).toString());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children.length, marker]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    localStorage.setItem('currentChildrenPage', newPage.toString());
  };
  return (
    <>
      <ChildrenListWrapper>
        {children?.map(child => {
          return <ChildrenCard key={child._id} child={child} />;
        })}
      </ChildrenListWrapper>
      <ChildrenListPagination
        count={pageCount ? pageCount : 1}
        page={page}
        onChange={handlePageChange}
        siblingCount={5}
        showFirstButton
        showLastButton
      />
    </>
  );
}

export default ChildrenList;
