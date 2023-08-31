import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormChild = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 15px;
  width: 375px;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
export const FormImgContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;
export const FieldChild = styled(Field)`
  width: 100%;
  height: 40px;
  max-width: 600px;

  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 1px var(--main-green);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;
`;

export const NameFormChild = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;
export const FormButton = styled.button`
  border-radius: 4px;
  margin: 0 auto;
  width: 200px;
  background-color: #68bf48;
  color: var(--header-main-color);
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px 10px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--main-green);
    border-color: var(--header-main-color);
  }
`;

export const FieldChildBirth = styled(Field)`
  height: 40px;
  max-width: 300px;
  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 1px var(--main-green);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;
`;
export const AgeDiscr = styled.div`
  height: 40px;
  max-width: 100px;
  padding: 5px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 1px var(--main-green);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;
  margin-left: 10px;
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
export const AgeConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 600px;
`;
export const AdgTitle = styled.span`
  display: none;
  margin-left: 25px;
  margin-right: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  color: #2a2a2a;

  @media (min-width: 768px) {
    display: block;
  }
`;
