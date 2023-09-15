import {
  BtnNavContainer,
  ContainerWelcomPage,
  TitleContainer,
  WelcomImg,
  WelcomLogo,
  WelcomTitle,
} from './WelcomePage.styled';
import welcomeImgLarge from 'assets/images/authPage/authMainScreen.jpg';
import welcomeImgMedium from 'assets/images/different/children_desctop.jpg';
import welcomeImgSmall from 'assets/images/different/children_mobil.jpg';
import logo from 'assets/images/authPage/authLogoScreen.jpg';
import { useEffect, useState } from 'react';
import BtnNav from 'ui/BtnNav/BtnNav';

function WelcomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let selectedWelcomeImg;

  if (windowWidth > 768) {
    selectedWelcomeImg = welcomeImgLarge;
  } else if (windowWidth > 375) {
    selectedWelcomeImg = welcomeImgMedium;
  } else {
    selectedWelcomeImg = welcomeImgSmall;
  }

  return (
    <ContainerWelcomPage>
      <div>
        <WelcomImg src={selectedWelcomeImg} alt="children" />
      </div>
      <TitleContainer>
        <WelcomTitle>
          Вітаємо Вас на сторінці робочого застосунку дитячого центру розвитку:
        </WelcomTitle>
        <WelcomLogo src={logo} alt="logo" width={300} height={125} />
        <WelcomTitle>
          Почніть з реєстрації або авторизації. І нехай ці посмішки надихають
          Вас на нові звершення!
        </WelcomTitle>
      </TitleContainer>
      <BtnNavContainer>
        <BtnNav to="auth/register">Реєстрація</BtnNav>
        <BtnNav to="auth/signin" className="dark">
          Вхід
        </BtnNav>
      </BtnNavContainer>
    </ContainerWelcomPage>
  );
}

export default WelcomePage;
