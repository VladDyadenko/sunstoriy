import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const ChildrenListWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 30px;
`;
export const ChildrenListPagination = styled(Pagination)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px 0;
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: var(--bg-main-color);
    color: var(--header-main-color);

    &:hover {
      background-color: var(--main-green);
      color: var(--header-main-color);
    }
  }

  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
    color: var(--main-green);
    font-weight: 700;
    &:hover {
      background-color: var(--main-dark-blue);
      color: var(--header-main-color);
    }
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
      font-size: 1rem;
    }
  }
`;
