import { formatTimeRange } from 'assets/constants/transformation';
import {
  TableItem,
  TableItemDefault,
  TimeContainer,
  TimeItem,
} from './TimeLessons.stayled';

function TimeLessons({ timeLessonOnList }) {
  return (
    <>
      <TimeContainer>
        <TableItemDefault></TableItemDefault>
        {timeLessonOnList?.map((time, index) => {
          return (
            <TableItem key={time + index}>
              <TimeItem>{formatTimeRange(time)}</TimeItem>
            </TableItem>
          );
        })}
      </TimeContainer>
    </>
  );
}

export default TimeLessons;
