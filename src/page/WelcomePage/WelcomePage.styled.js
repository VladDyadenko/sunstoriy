import styled from 'styled-components';

export const ContainerWelcomPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
`;
export const TitleContainer = styled.div`
  margin-top: 30px;
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const BtnNavContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WelcomTitle = styled.h2`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: var(--main-green);

  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
  }
`;
export const WelcomLogo = styled.img`
  display: block;
  width: 250px;
  text-align: center;
  @media (min-width: 768px) {
    width: 300px;
  }
`;
export const WelcomImg = styled.img`
  width: 1440px;
  height: 300px;
`;
