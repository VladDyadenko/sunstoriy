import { Select } from 'antd';
import {
  TeacherLessonChose,
  TitleTypeLesson,
  WrapperTypeLesson,
} from './AddTypeLesson.styled';
const { Option } = Select;

const AddTypeLesson = ({ typeLesson, setTypeLesson }) => {
  return (
    <>
      <TitleTypeLesson>План заняття</TitleTypeLesson>
      <WrapperTypeLesson>
        <TeacherLessonChose>Кабінет:</TeacherLessonChose>
        <Select value={typeLesson} onChange={setTypeLesson}>
          <Option style={{ minWidth: '90px' }} value="Сенсорна">
            Сенсорна
          </Option>
          <Option value="Логопед">Логопед</Option>
          <Option value="Корекційний">Корекційний</Option>
        </Select>
      </WrapperTypeLesson>
    </>
  );
};

export default AddTypeLesson;
