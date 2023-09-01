import { Field } from 'formik';
import styled from 'styled-components';

export const FieldParents = styled(Field)`
  height: 40px;
  width: 100%;
  padding: 12px 20px;
  color: #2a2a2a;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.28px;
  border: solid 2px var(--bg-main-color);
  border-radius: 6px;
  opacity: 0.8;
  background-color: transparent;

  &:focus-visible {
    border: solid 2px var(--main-green);
  }

  @media (min-width: 768px) {
    max-width: 285px;
    flex: 1;
  }
`;
export const MatherTitle = styled.label`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  color: var(--main-green);

  @media (min-width: 768px) {
    width: 110px;
  }
`;
export const ParentsWrapper = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 15px 0;
    gap: 30px;
  }
`;
