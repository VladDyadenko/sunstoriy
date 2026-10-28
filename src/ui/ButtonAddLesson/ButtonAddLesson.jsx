import { BtnAddLesson, BtnTitle, Wrapper } from './ButtonAddLesson.styled';
import FreeTableItem from 'ui/FreeTableItem/FreeTableItem';

const ButtonAddLesson = ({ pageName }) => {
  const infoOffice = JSON.stringify({ office: pageName });
  return (
    <Wrapper>
      <BtnTitle>Додати урок:</BtnTitle>
      <BtnAddLesson to={`/lesson?lessonCopy=${infoOffice}`}>
        <FreeTableItem />
      </BtnAddLesson>
    </Wrapper>
  );
};

export default ButtonAddLesson;
