import styled from 'styled-components';

import rasImage_mob from 'assets/images/different/RAS.jpg';
import rasImage_tablet from 'assets/images/different/RAS_tablet.jpg';

export const Section = styled.div`
  width: 100%;
  flex: 1;
  min-height: 100vh;
  background-color: #fff;
`;

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  @media (min-width: 1440px) {
    display: flex;
    padding-top: 100px;
    gap: 100px;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const ImgWrapper = styled.div`
  height: 250px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-image: image-set(url(${rasImage_mob}) 1x);
  background-size: contain;
  background-position: center 9px;
  border-radius: 8px;

  @media (min-width: 768px) {
    background-image: image-set(url(${rasImage_tablet}) 1x);
    height: 395px;
    background-position: center 12px;
  }

  @media (min-width: 1440px) {
    width: 500px;
    height: 425px;
    margin: 0;
  }
`;
