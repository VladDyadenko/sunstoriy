import { useEffect, useState } from 'react';
import { getAllChild } from 'redux/child/api';
import { Notify } from 'notiflix';

import ChildrenList from 'components/Children/ChildrenList/ChildrenList';
import Container from '../../components/Container/Container';
import { ChildrenTitle } from './ChildrenPage.styled';

function ChildrenPage() {
  const [allChildren, setAllChildren] = useState();
  console.log(allChildren);

  useEffect(() => {
    async function fetchChildren() {
      try {
        const data = await getAllChild();

        if (!data) {
          return;
        }
        setAllChildren(data);
      } catch (error) {
        Notify.failure('Children not found!');
      }
    }
    fetchChildren();
  }, []);
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
