import { useEffect, useState } from 'react';

import ChildrenList from 'components/Children/ChildrenList/ChildrenList';
import Container from '../../components/Container/Container';
import { ChildrenTitle } from './ChildrenPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChildren } from 'redux/child/childOperetion';
import { selectChildren } from 'redux/child/childSelector';

function ChildrenPage() {
  const [allChildren, setAllChildren] = useState();

  const children = useSelector(selectChildren);

  useEffect(() => {
    setAllChildren(children);
  }, [children]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChildren());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchChildren());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ChildrenTitle>Наші мрійникі та фантазери</ChildrenTitle>
        <ChildrenList allChildren={allChildren} />
      </Container>
    </>
  );
}

export default ChildrenPage;
