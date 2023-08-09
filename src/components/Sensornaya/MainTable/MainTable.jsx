import { OneDayLessons, timeLesson } from 'assets/constants/mainConstans';
import {
  TimeContainer,
  TableItem,
  TimeItem,
  MainWrapper,
  LessonsWrapper,
  AllTimesContainer,
  AllTimesItem,
  CardInfo,
  OneTimeContainer,
  OneTimeItem,
} from './MainTable.styled';

function MainTable() {
  return (
    <MainWrapper>
      <TimeContainer>
        {OneDayLessons.map(val => {
          return (
            <TableItem key={val.id}>
              <TimeItem>{val.time}</TimeItem>
            </TableItem>
          );
        })}
      </TimeContainer>
      <LessonsWrapper>
        <AllTimesContainer>
          <AllTimesItem>
            <OneTimeContainer>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
              <OneTimeItem>
                <CardInfo>Card</CardInfo>
              </OneTimeItem>
            </OneTimeContainer>
          </AllTimesItem>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
          <li>
            <p>Card</p>
          </li>
        </AllTimesContainer>
      </LessonsWrapper>
    </MainWrapper>
  );
}

export default MainTable;
