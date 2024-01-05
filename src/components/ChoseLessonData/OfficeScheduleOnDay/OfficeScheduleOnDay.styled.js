import styled from 'styled-components';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ScheduleWrapper = styled.div``;
export const MainWrapper = styled.div`
  display: flex;
  align-items: start;
`;
export const OfficeWrapper = styled.ul`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 5px;
  margin-right: 8px;
  gap: 10px;
`;
export const LessonMainWrapper = styled.div`
  overflow: auto;
`;

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
  gap: 10px;
  margin-top: 2px;
  padding: 5px;
`;
export const TimeLessonWrapper = styled.ul`
  display: flex;
  justify-content: start;
  gap: 10px;
`;
export const TimeEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: 34px;
  border-radius: 8px;
  border: 2px solid var(--main-dark-blue);
`;
export const AddLessonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconAddLesson = styled(BsPlusCircleDotted)`
  width: 25px;
  height: 25px;
  fill: #a9a9a9;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 100ms;

  &:hover {
    fill: var(--main-dark-blue);
  }
`;
export const TimeOneLesson = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 14px;
  min-width: 250px;
  padding: 5px;
  background-color: var(--main-blue);
  color: #191970;
  border-radius: 8px;
  border: 2px solid var(--main-dark-blue);
`;
export const OfficeName = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: 84px;
  padding: 5px;
  margin-top: 2px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 14px;
  background-color: var(--main-blue);
  color: #191970;
  border-radius: 8px;
  border: 2px solid var(--main-dark-blue);
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
  min-width: 250px;
  min-height: 110px;
  padding: 5px;
`;
export const LessonContainer = styled.li`
  font-family: 'RobotoSlab';
  font-weight: 400;
  width: 250px;
  height: 100%;
  flex-direction: column;
  border-radius: 8px;
  /* border: 2px solid transparent; */
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  border: 2px solid ${props => props['aria-current'] || '#fff'};
  color: ${props => props['aria-current'] || '#fff'};
`;
export const LessonFreeContainer = styled.li`
  cursor: pointer;
  width: 250px;
  height: 100%;
  flex-direction: column;
  border-radius: 8px;
`;
