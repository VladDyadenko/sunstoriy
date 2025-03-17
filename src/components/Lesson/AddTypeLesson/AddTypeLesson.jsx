import { Select } from 'antd';
import { TeacherLessonChose, WrapperTypeLesson } from './AddTypeLesson.styled';
import { offices } from 'assets/constants/AddLessonsConstans';
import { useEffect } from 'react';
const { Option } = Select;

const AddTypeLesson = ({ office, setTypeLesson, setFieldValue }) => {
  useEffect(() => {
    if (office) {
      setFieldValue('office', office);
      setTypeLesson(office);
    }
  }, [setFieldValue, setTypeLesson, office]);

  return (
    <>
      <WrapperTypeLesson>
        <TeacherLessonChose>Кабінет:</TeacherLessonChose>
        <Select
          value={office}
          onChange={value => {
            setTypeLesson(value);
            setFieldValue('office', value);
          }}
        >
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
