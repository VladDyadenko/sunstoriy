import { timeLesson } from 'assets/constants/mainConstans';
import {
  TableItem,
  TableItemDefault,
  TimeContainer,
  TimeItem,
} from './TimeLessons.stayled';

function TimeLessons() {
  return (
    <>
      <TimeContainer>
        <TableItemDefault></TableItemDefault>
        {timeLesson.map(val => {
          return (
            <TableItem key={val.id}>
              <TimeItem>{val.time}</TimeItem>
            </TableItem>
          );
        })}
      </TimeContainer>
    </>
  );
}

export default TimeLessons;
