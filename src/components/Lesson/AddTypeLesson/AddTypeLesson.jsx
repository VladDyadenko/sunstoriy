import { Select } from 'antd';
import { TeacherLessonChose, WrapperTypeLesson } from './AddTypeLesson.styled';
import { offices } from 'assets/constants/AddLessonsConstans';
import { useEffect } from 'react';
const { Option } = Select;

const AddTypeLesson = ({ office, setTypeLesson, setFieldValue }) => {
  useEffect(() => {
    setFieldValue('office', office);
  }, [setFieldValue, office]);

  return (
    <>
      <WrapperTypeLesson>
        <TeacherLessonChose>Кабінет:</TeacherLessonChose>
        <Select value={office} onChange={setTypeLesson}>
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
