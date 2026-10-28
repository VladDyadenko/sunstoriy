import CardLink from '../CardLink/CardLink';
import { mainCardDescr } from '../MainPageConstants';
import { MainPageWrapper } from './MainContainer.styled';

function MainContainer() {
  return (
    <MainPageWrapper>
      {mainCardDescr.map(({ title, image, path, descr }) => {
        return (
          <CardLink
            key={title}
            title={title}
            image={image}
            path={path}
            descr={descr}
          />
        );
      })}
    </MainPageWrapper>
  );
}

export default MainContainer;
