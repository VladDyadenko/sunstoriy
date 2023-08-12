import styled from 'styled-components';

export const WrapperTeacher = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & ul {
    width: 100%;

    & li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
`;
export const TeacherTitle = styled.h4`
  align-items: center;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const InfoContainer = styled.div`
  min-width: 150px;
`;
export const TeacherInfo = styled.span`
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 18px;
  margin-right: 10px;
`;
export const TacherCheck = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
export const ColorMarker = styled.p`
  width: 40px;
  height: 25px;
  margin-left: 10px;
  border-radius: 20px;

  ${props => {
    const { 'aria-current': ariaCurrent } = props;
    return ` background-color: ${ariaCurrent}`;
  }};
`;
