import { Field } from 'formik';
import styled from 'styled-components';

export const FieldMather = styled(Field)`
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
export const MatherTitle = styled.p`
  width: 110px;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  color: var(--main-green);
  margin-bottom: 10px;
`;
export const ParentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: start;
  gap: 30px;
`;
