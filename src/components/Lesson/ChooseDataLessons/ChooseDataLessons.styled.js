import { Select } from 'antd';
import styled from 'styled-components';

export const ChooseDataWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin: 0;
    width: 63%;
  }
  @media (min-width: 1280px) {
    margin: 0;
    width: 78%;
  }
`;
export const ChooseOffices = styled(Select)`
  width: 100%;
  /* max-width: 345px; */
`;
