import ChildForm from 'components/Child/ChildForm/ChildForm';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { getChildById } from 'redux/child/api';

function ChildPage() {
  const { childId } = useParams();
  const [child, setChild] = useState('');

  useEffect(() => {
    if (!childId) {
      return;
    }

    async function fetshChild() {
      try {
        const child = await getChildById(childId);
        if (!child) {
          return;
        }
        setChild(child);
      } catch (err) {
        Notify.failure('Child not found');
      }
    }
    fetshChild();
  }, [childId]);

  return (
    <>
      <ChildForm child={child} />
    </>
  );
}

export default ChildPage;
