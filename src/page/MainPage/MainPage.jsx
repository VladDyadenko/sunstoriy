import { Watermark } from 'antd';
import Container from '../../components/Container/Container';
import MainContainer from 'components/MainPage/MainContainer/MainContainer';
import { useEffect } from 'react';
import { currentThunk } from 'redux/auth/authOperetion';
import { useDispatch } from 'react-redux';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
