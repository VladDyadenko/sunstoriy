import { useEffect } from 'react';

export const useUniqueTeacher = (selectedLessons, setTeachers) => {
  useEffect(() => {
    const uniqueTeachers = Array.from(
      new Set(
        selectedLessons?.map(
          lesson => `${lesson.teacherName} ${lesson.teacherSurname}`
        )
      )
    );
    setTeachers(uniqueTeachers);
  }, [selectedLessons, setTeachers]);
};
