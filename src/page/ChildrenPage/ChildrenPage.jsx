import ChildrenList from 'components/Children/ChildrenList/ChildrenList';
import Container from '../../components/Container/Container';
import ChildrenSearch from 'components/Children/ChildrenSearch/ChildrenSearch';
import { ChildrenTitle } from './ChildrenPage.styled';
import { useState } from 'react';

function ChildrenPage() {
  const [page, setPage] = useState(
    () => parseInt(localStorage.getItem('currentChildrenPage')) || 1
  );

  return (
    <>
      <Container>
        <ChildrenSearch page={page} />
        <ChildrenTitle>Наші мрійникі та фантазери</ChildrenTitle>
        <ChildrenList page={page} setPage={setPage} />
      </Container>
    </>
  );
}

export default ChildrenPage;
