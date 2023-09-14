import {
  ButtonCard,
  CardWrapper,
  ImedgeContainer,
  TitleCard,
  TitleContainer,
} from './CardLink.styled';

function CardLink({ title, image }) {
  return (
    <>
      <CardWrapper>
        <ImedgeContainer>
          <img src={image} alt="children" width="100%" height={150} />
        </ImedgeContainer>
        <TitleContainer>
          <TitleCard>{title}</TitleCard>
        </TitleContainer>
        <ButtonCard>Створити</ButtonCard>
      </CardWrapper>
    </>
  );
}

export default CardLink;
