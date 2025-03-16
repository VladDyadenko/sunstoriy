import { Link } from 'react-router-dom';
import {
  AddLessonLink,
  IconAddLessonLink,
  TableItem,
  TimeContainer,
  TimeItem,
} from './TimeLessons.stayled';
import { formatTimeRange } from 'utils/dateTransform';

function TimeLessons({ timeLessonOnList, officeName }) {
  const infoOffice = JSON.stringify({ office: officeName });
  return (
    <>
      <TimeContainer>
        <AddLessonLink>
          <Link to={`/lesson?lessonCopy=${infoOffice}`}>
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
