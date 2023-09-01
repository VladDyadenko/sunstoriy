import {
  FieldParents,
  MatherTitle,
  ParentsWrapper,
} from './ParentsContainer.styled';

function ParentsContainer({ title, inputName, inputPhone }) {
  return (
    <>
      <ParentsWrapper>
        <MatherTitle>{title} дитини:</MatherTitle>
        <FieldParents name={inputName} type="text" placeholder="Ім'я" />
        <FieldParents
          name={inputPhone}
          type="tel"
          placeholder="+380(__)___ __ __"
        />
      </ParentsWrapper>
    </>
  );
}

export default ParentsContainer;
