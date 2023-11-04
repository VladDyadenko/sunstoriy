import SearchModule from 'ui/SearchModule/SearchModule';
import {
  BtnAddTeacherLesson,
  ModalContainer,
  TeacherChosedList,
  TeacherDescr,
  TeacherItem,
  TitleTeacherLesson,
  WrapperTeacherLesson,
} from './AddTeacherToLesson.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTeacherOperetion,
  selectTeachers,
} from 'redux/teacher/teacherSelector';
import { useEffect, useState } from 'react';
import { fetchTeacherByName } from 'redux/teacher/teacherOperetion';

const AddTeacherToLesson = ({ setFieldValue, addSuccessLesson }) => {
  const [userSearch, setUserSearch] = useState('');
  const [choseTeachers, setChoseTeachers] = useState('');
  const [teacher, setChoseTeacher] = useState(() => {
    const storedTeacher = localStorage.getItem('сurrentTeacherAddLesson');
    return storedTeacher ? JSON.parse(storedTeacher) : null;
  });

  useEffect(() => {
    if (!addSuccessLesson || addSuccessLesson) {
      setChoseTeacher(null);
      localStorage.setItem('сurrentTeacherAddLesson', null);
    }
  }, [addSuccessLesson]);

  const operetion = useSelector(selectTeacherOperetion);
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    if (teachers.length > 0) {
      setChoseTeachers(teachers);
    }
  }, [teachers]);

  useEffect(() => {
    if (userSearch?.length >= 1) {
      dispatch(fetchTeacherByName(userSearch));
    }
    setChoseTeachers('');
  }, [dispatch, userSearch]);

  const handleInputChange = e => {
    const userQuery = e.target.value.trim();
    setUserSearch(userQuery);
  };
  const resetSearch = () => {
    setUserSearch('');
  };

  const handleChoseTeacher = selectedTeacher => {
    setChoseTeacher(selectedTeacher);
    setFieldValue('teacher', selectedTeacher._id);
    localStorage.setItem(
      'сurrentTeacherAddLesson',
      JSON.stringify(selectedTeacher)
    );
    setUserSearch('');
  };
  return (
    <>
      <WrapperTeacherLesson>
        <TeacherDescr>
          <TitleTeacherLesson>Фахівець:</TitleTeacherLesson>
          {teacher ? (
            <BtnAddTeacherLesson
              to={`/teacher/${teacher._id}?source=buttonViewing`}
            >
              {teacher.name} {teacher.surname}
            </BtnAddTeacherLesson>
          ) : null}
        </TeacherDescr>

        <div>
          <SearchModule
            operetion={operetion}
            handleInputChange={handleInputChange}
            resetSearch={resetSearch}
            userSearch={userSearch}
          />
          {choseTeachers?.length > 0 ? (
            <ModalContainer>
              <TeacherChosedList>
                {choseTeachers?.map(teacher => (
                  <TeacherItem
                    key={teacher._id}
                    onClick={() => handleChoseTeacher(teacher)}
                  >
                    {teacher.name} {teacher.surname}
                  </TeacherItem>
                ))}
              </TeacherChosedList>
            </ModalContainer>
          ) : null}
        </div>
      </WrapperTeacherLesson>
    </>
  );
};

export default AddTeacherToLesson;
