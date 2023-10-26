import { Watermark } from 'antd';
import Container from '../../components/Container/Container';
import MainContainer from 'components/MainPage/MainContainer/MainContainer';

function MainPage() {
  return (
    <>
      <Container>
        <Watermark style={{ height: '100vh' }} content="Sunstoriy">
          <MainContainer />
        </Watermark>
      </Container>
    </>
  );
}

export default MainPage;
