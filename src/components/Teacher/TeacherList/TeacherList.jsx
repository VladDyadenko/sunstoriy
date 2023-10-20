import TeacherCard from '../TeacherCard/TeacherCard';
import { TeachersListWrapper } from './TeacherList.styled';

const TeacherList = ({ teachers }) => {
  return (
    <TeachersListWrapper>
      {teachers?.map(teacher => {
        return <TeacherCard key={teacher._id} teacher={teacher} />;
      })}
    </TeachersListWrapper>
  );
};

export default TeacherList;
