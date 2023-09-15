import {
  ButtonCard,
  ChildrenCardWrapper,
  ImedgeChild,
  ImedgeContainer,
  TitleCard,
  TitleContainer,
} from './ChildrenCard.styled';

import defaultImg from 'assets/images/Children/childrenPage_2.png';

function ChildrenCard({ child }) {
  const { childImage, name, surname, _id } = child;
  console.log(child);
  return (
    <>
      <ChildrenCardWrapper>
        <ImedgeContainer>
          <ImedgeChild
            src={childImage ? childImage : defaultImg}
            alt="children"
            width={230}
            height={180}
          />
        </ImedgeContainer>
        <TitleContainer>
          <TitleCard>{name}</TitleCard>
          <TitleCard>{surname}</TitleCard>
        </TitleContainer>
        <ButtonCard to={`/child/${_id}`}>Переглянути</ButtonCard>
      </ChildrenCardWrapper>
    </>
  );
}

export default ChildrenCard;
