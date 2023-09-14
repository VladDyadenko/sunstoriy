import CardLink from '../CardLink/CardLink';
import { mainCardDescr } from '../MainPageConstants';
import { MainPageWrapper } from './MainContainer.styled';

function MainContainer() {
  return (
    <MainPageWrapper>
      {mainCardDescr.map(({ title, image }) => {
        return <CardLink title={title} image={image} />;
      })}
    </MainPageWrapper>
  );
}

export default MainContainer;
