import { Watermark } from 'antd';
import Container from '../../components/Container/Container';
import MainContainer from 'components/MainPage/MainContainer/MainContainer';

function MainPage() {
  return (
    <>
      <Container>
        <Watermark content="Sunstoriy">
          <div style={{ height: '100vh' }}>
            <MainContainer/>
        
          </div>
        </Watermark>
      </Container>
    </>
  );
}

export default MainPage;
