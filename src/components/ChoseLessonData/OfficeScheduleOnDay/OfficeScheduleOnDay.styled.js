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
  /* padding: 5px; */
  margin-right: 8px;
  margin-left: -15px;
  gap: 10px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;
export const LessonMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  overflow: auto;
`;

export const TimeContainer = styled.div`
  width: 100%;
  /* padding: 5px; */
`;
export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const OfficeContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  /* margin-top: 2px; */
  /* padding: 5px; */
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
  min-width: 70px;
  height: 34px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    min-width: 115px;
  }
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
  font-weight: 900;
  font-size: 10px;
  letter-spacing: 0.1rem;
  min-width: 300px;
  height: 34px;
  padding: 5px;
  background-color: var(--main-blue);
  border-radius: 8px;
  color: var(--text-lessons-time);
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    min-width: 300px;
    font-size: 14px;
  }
`;
export const OfficeName = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  height: 90px;
  /* padding: 5px;
  margin-top: 2px; */
  font-family: 'RobotoSlab';
  font-weight: 900;
  font-size: 10px;
  letter-spacing: 0.1rem;
  border-radius: 8px;
  color: var(--text-lessons-time);
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    min-width: 115px;
    font-size: 14px;
  }
`;
export const DescrLessonWrapper = styled.ul`
  height: 90px;
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
  font-size: 10px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  width: 300px;
  height: 100%;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }
  @media (min-width: 768px) {
    width: 300px;
    font-size: 14px;
  }
`;
export const LessonFreeContainer = styled.li`
  cursor: pointer;
  width: 230px;
  height: 100%;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    width: 250px;
  }
`;
