import MainTable from 'ui/MainTable/MainTable';
import Container from 'components/Container/Container';
import MainLeftPanel from 'ui/MainLeftPanel/MainLeftPanel';
import { MainWrapper } from 'components/ContainerMain/ContainerMain.styled';

import {
  Lessons_List,
  TEACHERS_SENSORNAYA,
} from 'assets/constants/mainConstans';

function SensornayaPage() {
  return (
    <>
      <Container>
        <MainWrapper>
          <MainLeftPanel teachersData={TEACHERS_SENSORNAYA} />
          <MainTable lessonsData={Lessons_List} />
        </MainWrapper>
      </Container>
    </>
  );
}

export default SensornayaPage;
