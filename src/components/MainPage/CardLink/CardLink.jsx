import {
  ButtonCard,
  CardWrapper,
  ImedgeContainer,
  TitleCard,
  TitleContainer,
} from './CardLink.styled';

function CardLink({ title, image, path, descr }) {
  return (
    <>
      <CardWrapper>
        <ImedgeContainer>
          <img src={image} alt="children" width={230} height={130} />
        </ImedgeContainer>
        <TitleContainer>
          <TitleCard>{title}</TitleCard>
        </TitleContainer>
        <ButtonCard to={path}>{descr}</ButtonCard>
      </CardWrapper>
    </>
  );
}

export default CardLink;
