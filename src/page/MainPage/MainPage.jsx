import { Watermark } from 'antd';
import Container from '../../components/Container/Container';

function MainPage() {
  return (
    <>
      <Container>
        <Watermark content="Sunstoriy">
          <div style={{ height: '100vh' }}>
            <h4>MainPage</h4>
          </div>
        </Watermark>
      </Container>
    </>
  );
}

export default MainPage;
