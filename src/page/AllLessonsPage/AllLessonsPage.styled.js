import { Collapse } from 'antd';
import styled from 'styled-components';

export const AllLessonCollaps = styled(Collapse)`
  overflow: 'auto';
  & .ant-collapse-content-box {
    background-color: var(--lessons-background);
  }
`;
