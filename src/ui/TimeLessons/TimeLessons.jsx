import { Link } from 'react-router-dom';
import { formatTimeRange } from 'assets/constants/transformation';
import {
  AddLessonLink,
  IconAddLessonLink,
  TableItem,
  TimeContainer,
  TimeItem,
} from './TimeLessons.stayled';

function TimeLessons({ timeLessonOnList }) {
  return (
    <>
      <TimeContainer>
        <AddLessonLink>
          <Link to={`/lesson`}>
            <IconAddLessonLink />
          </Link>
        </AddLessonLink>
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
