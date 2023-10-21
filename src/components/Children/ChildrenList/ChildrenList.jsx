import React, { useEffect, useState } from 'react';
import {
  ChildrenListPagination,
  ChildrenListWrapper,
} from './ChildrenList.styled';
import ChildrenCard from '../ChildrenCard/ChildrenCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectChildren,
  selectChildrenPagination,
} from 'redux/child/childSelector';
import { fetchChildren } from 'redux/child/childOperetion';

function ChildrenList() {
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const pagination = useSelector(selectChildrenPagination);
  const children = useSelector(selectChildren);
  console.log(children);

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
    if (children?.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [children, page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
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
      />
    </>
  );
}

export default ChildrenList;
