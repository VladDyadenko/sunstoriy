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
  gap: 8px;
  margin-top: 2px;
  padding: 5px;
`;
export const TimeLessonWrapper = styled.ul`
  display: flex;
  justify-content: start;
  gap: 8px;
`;
export const TimeEmpty = styled.li`
  min-width: 110px;
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
  min-width: 200px;
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
  min-width: 110px;
  min-height: 100%;
  padding: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 14px;
  background-color: var(--main-blue);
  color: #191970;
  border-radius: 8px;
  border: 1px solid var(--main-dark-blue);
`;
export const DescrLessonWrapper = styled.ul`
  display: flex;
  justify-content: start;
  gap: 10px;
`;
export const DescrOneLesson = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  min-height: 110px;
  padding: 5px;
`;
export const LessonContainer = styled.li`
  font-family: 'RobotoSlab';
  font-weight: 400;
  cursor: pointer;
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  flex-direction: column;
  border-radius: 8px;
  /* border: 2px solid transparent; */
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  border: 2px solid ${props => props['aria-current'] || '#fff'};
  color: ${props => props['aria-current'] || '#fff'};
`;
export const LessonFreeContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  min-width: 200px;
  max-width: 250px;
  flex-direction: column;
  border-radius: 8px;
`;
