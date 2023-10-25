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

  .MuiButtonBase-root.MuiPaginationItem-root.MuiPaginationItem-sizeMedium.MuiPaginationItem-text.MuiPaginationItem-circular.MuiPaginationItem-page.css-1xr9krm {
    background-color: var(--bg-main-color);
    color: var(--header-main-color);
    font-family: 'RobotoSlab';
    font-size: 1rem;

    &:hover {
      background-color: var(--main-green);
      color: var(--header-main-color);
    }
  }

  .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiPaginationItem-icon.css-lrb33l {
    color: var(--main-green);
    font-weight: 700;
    &:hover {
      background-color: var(--main-dark-blue);
      color: var(--header-main-color);
    }
  }
`;
