import {
  Error,
  FeedbackFormGroup,
  IconFeedback,
  IconStyled,
  InputForm,
  StyleErrorMessage,
} from './InputAuth.styled';
import svgSprit from 'assets/images/authPage/symbol-defs.svg';

const InputAuth = ({ name, type, placeholder, errors, touched, iconName }) => {
  return (
    <>
      <FeedbackFormGroup
        className={errors && touched ? 'error' : touched && 'valid'}
      >
        <InputForm type={type} name={name} placeholder={placeholder} />
        <IconStyled>
          <use xlinkHref={`${svgSprit}${iconName}`} />
        </IconStyled>
        <IconFeedback>
          <use
            xlinkHref={
              errors && touched
                ? `${svgSprit}#icon-error`
                : touched && `${svgSprit}#icon-valid`
            }
          />
        </IconFeedback>
        <StyleErrorMessage name={name}>
          {msg => <Error>{msg}</Error>}
        </StyleErrorMessage>
      </FeedbackFormGroup>
    </>
  );
};

export default InputAuth;
