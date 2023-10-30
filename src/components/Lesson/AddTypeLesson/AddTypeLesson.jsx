import { Select } from 'antd';
import { TeacherLessonChose, WrapperTypeLesson } from './AddTypeLesson.styled';
import { offices } from 'assets/constants/AddLessonsConstans';
import { useEffect, useState } from 'react';
const { Option } = Select;

const AddTypeLesson = ({ setFieldValue }) => {
  const [typeLesson, setTypeLesson] = useState('Сенсорна');

  useEffect(() => {
    setFieldValue('office', typeLesson);
  }, [setFieldValue, typeLesson]);

  return (
    <>
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
