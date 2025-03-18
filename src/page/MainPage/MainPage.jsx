import { Watermark } from 'antd';
import Container from '../../components/Container/Container';
import MainContainer from 'components/MainPage/MainContainer/MainContainer';
import { useEffect } from 'react';
import { initializeAppThunk } from 'redux/auth/authOperetion';
import { useDispatch } from 'react-redux';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAppThunk());
  }, [dispatch]);

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
