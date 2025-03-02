const { useEffect } = require('react');

export const useFilteredLessonsTeachers = (lessons, setLessons, teacher) => {
  useEffect(() => {
    if (lessons && teacher && teacher.length > 0) {
      const filteredLessons = lessons?.filter(lesson => {
        const teacherFullName = `${lesson.teacherName} ${lesson.teacherSurname}`;
        return teacher.includes(teacherFullName);
      });

      setLessons(filteredLessons);
    } else {
      setLessons(lessons);
    }
  }, [lessons, setLessons, teacher]);
};
