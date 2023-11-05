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
        {timeLessonOnList?.map((val, index) => {
          return (
            <TableItem key={val + index}>
              <TimeItem>{val}</TimeItem>
            </TableItem>
          );
        })}
      </TimeContainer>
    </>
  );
}

export default TimeLessons;
