// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import ChildrenList from 'components/Children/ChildrenList/ChildrenList';
import Container from '../../components/Container/Container';
// import ChildrenSearch from 'components/Children/ChildrenSearch/ChildrenSearch';
import { ChildrenTitle } from './ChildrenPage.styled';
// import { fetchChildren } from 'redux/child/childOperetion';
// import { selectChildren } from 'redux/child/childSelector';

function ChildrenPage() {
  // const [allChildren, setAllChildren] = useState(null);
  // const [visibleListChildren, setVisibleListChildren] = useState();
  // const children = useSelector(selectChildren);

  // useEffect(() => {
  //   setAllChildren(children);
  // }, [children]);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchChildren());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchChildren());
  // }, [dispatch]);

  return (
    <>
      <Container>
        {/* <ChildrenSearch
        allChildren={allChildren}
        setVisibleListChildren={setVisibleListChildren}
        /> */}
        <ChildrenTitle>Наші мрійникі та фантазери</ChildrenTitle>
        <ChildrenList />
      </Container>
    </>
  );
}

export default ChildrenPage;
