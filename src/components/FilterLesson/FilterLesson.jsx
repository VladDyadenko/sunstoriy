import { memo } from 'react';
import { Collapse } from 'antd';

function FilterLesson({ currentItems }) {
  return (
    <>
      <Collapse style={{ overflow: 'auto' }} items={currentItems} />
    </>
  );
}

export default memo(FilterLesson);
