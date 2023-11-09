import styled from 'styled-components';

export const ScheduleWrapper = styled.div``;

export const TimeContainer = styled.div`
  width: 100%;
  padding: 5px;
`;
export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const OfficeContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 5px;
  margin-top: 2px;
  padding: 5px;
`;
export const TimeLessonWrapper = styled.ul`
  display: flex;
  justify-content: start;
  gap: 5px;
`;
export const TimeEmpty = styled.li`
  min-width: 90px;
  border-radius: 8px;
  border: 2px solid var(--main-dark-blue);
`;
export const TimeOneLesson = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 14px;
  min-width: 110px;
  padding: 5px;
  background-color: var(--main-blue);
  color: #191970;
  border-radius: 8px;
  border: 1px solid var(--main-dark-blue);
`;
export const OfficeName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  min-height: 100%;
  padding: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 16px;
  background-color: var(--main-blue);
  color: #191970;
  border-radius: 8px;
  border: 1px solid var(--main-dark-blue);
`;
export const DescrLessonWrapper = styled.ul`
  display: flex;
  justify-content: start;
  gap: 5px;
`;
export const DescrOneLesson = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  min-height: 100px;
  padding: 5px;
  /* border-radius: 8px;
  border: 1px solid var(--main-dark-blue); */
`;
