import {
  LessonCardContainer,
  LessonCardTitle,
  WrapperModal,
} from './LessonCard.styled';

function LessonCard() {
  return (
    <WrapperModal>
      <LessonCardContainer>
        <LessonCardTitle>Картка заняття</LessonCardTitle>
      </LessonCardContainer>
    </WrapperModal>
  );
}

export default LessonCard;
