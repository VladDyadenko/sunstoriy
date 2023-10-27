import { Select } from 'antd';
import {
  TeacherLessonChose,
  TitleTypeLesson,
  WrapperTypeLesson,
} from './AddTypeLesson.styled';
import { offices } from 'assets/constants/AddLessonsConstans';
const { Option } = Select;

const AddTypeLesson = ({ typeLesson, setTypeLesson }) => {
  return (
    <>
      <TitleTypeLesson>Картка заняття</TitleTypeLesson>
      <WrapperTypeLesson>
        <TeacherLessonChose>Кабінет:</TeacherLessonChose>
        <Select value={typeLesson} onChange={setTypeLesson}>
          {offices.map(({ name }) => (
            <Option key={name} style={{ minWidth: '90px' }} value={name}>
              {name}
            </Option>
          ))}
        </Select>
      </WrapperTypeLesson>
    </>
  );
};

export default AddTypeLesson;
