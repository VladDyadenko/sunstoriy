import { Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  ButtonTeacherCard,
  ButtonTeacherDelete,
  ButtonTeacherEdit,
  IconTeacherDelete,
  IconTeacherEdit,
  ImedgeContainer,
  ImedgeTeacher,
  InfoTeacher,
  TeacherCardWrapper,
  TeacherDescr,
  TeacherSpecializationInfo,
} from './TeacherCard.styled';
import defaultImg from 'assets/images/Teacher/teacher_1.png';
import { deleteTeacherById } from 'redux/teacher/teacherOperetion';

const TeacherCard = ({ teacher }) => {
  const { teacherImage, name, specialization, _id, surname } = teacher;
  const dispatch = useDispatch();
  return (
    <>
      <TeacherCardWrapper>
        <ImedgeContainer>
          <ImedgeTeacher
            src={teacherImage ? teacherImage : defaultImg}
            alt="children"
            width={120}
            height={120}
          />
        </ImedgeContainer>
        <TeacherDescr>
          <InfoTeacher>{name}</InfoTeacher>
          <InfoTeacher>{surname}</InfoTeacher>
          {specialization?.map(val => (
            <TeacherSpecializationInfo key={val}>
              {val}
            </TeacherSpecializationInfo>
          ))}
        </TeacherDescr>
        <Popconfirm
          title="Видалити картку"
          description="Ви впевнені, що хочете видалити цю картку?"
          icon={
            <QuestionCircleOutlined
              style={{
                color: 'red',
              }}
            />
          }
          onConfirm={() => dispatch(deleteTeacherById(_id))}
        >
          <ButtonTeacherDelete primary="true">
            <IconTeacherDelete />
          </ButtonTeacherDelete>
        </Popconfirm>
        <ButtonTeacherEdit to={`/teacher/${_id}`}>
          <IconTeacherEdit />
        </ButtonTeacherEdit>
        <ButtonTeacherCard to={`/teacher/${_id}?source=buttonViewing`}>
          Переглянути
        </ButtonTeacherCard>
      </TeacherCardWrapper>
    </>
  );
};

export default TeacherCard;
