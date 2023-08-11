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
        {timeLessonOnList.map(val => {
          return (
            <TableItem key={val}>
              <TimeItem>{val}</TimeItem>
            </TableItem>
          );
        })}
      </TimeContainer>
    </>
  );
}

export default TimeLessons;
