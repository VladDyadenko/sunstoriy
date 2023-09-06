import { ErrorInfo } from '../ChildForm/ChildForm.styled';
import {
  FieldParents,
  MatherTitle,
  ParentsWrapper,
} from './ParentsContainer.styled';

function ParentsContainer({ title, touched, errors, inputName, inputPhone }) {
  return (
    <>
      <ParentsWrapper>
        <MatherTitle>{title} дитини:</MatherTitle>
        <div>
          <FieldParents name={inputName} type="text" placeholder="Ім'я" />
          {touched[inputName] && errors[inputName] && (
            <ErrorInfo>{errors[inputName]}</ErrorInfo>
          )}
        </div>
        <div>
          <FieldParents
            name={inputPhone}
            type="tel"
            placeholder="+380(__)___ __ __"
          />
          {touched[inputPhone] && errors[inputPhone] && (
            <ErrorInfo>{errors[inputPhone]}</ErrorInfo>
          )}
        </div>
      </ParentsWrapper>
    </>
  );
}

export default ParentsContainer;
