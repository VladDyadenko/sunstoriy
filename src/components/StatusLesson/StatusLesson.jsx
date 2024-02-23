import { Popover } from 'antd';
import {
  ButtonContainer,
  CancelBtn,
  LessonButtonCancel,
  PlanBtn,
  ReplaceBtn,
} from './StatusLesson.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLesson } from 'redux/Lesson/lessonOperetion';

const StatusLesson = ({ lessonData }) => {
  const { status, _id } = lessonData;

  const dispatch = useDispatch();
  const [currentStatus, setCurrentStatus] = useState(
    status ? status : 'to_plan'
  );

  const handleChangeStatus = type => {
    setCurrentStatus(type);
    const combinedData = { id: _id, values: { ...lessonData, status: type } };
    dispatch(updateLesson(combinedData)).then(() => {});
  };
  const cancelButton = (
    <CancelBtn onClick={() => handleChangeStatus('cancel')}>Відміна</CancelBtn>
  );
  const replaceButton = (
    <ReplaceBtn onClick={() => handleChangeStatus('replace')}>
      Заміна
    </ReplaceBtn>
  );
  const planButton = (
    <PlanBtn onClick={() => handleChangeStatus('to_plan')}>Планово</PlanBtn>
  );

  const content = (
    <ButtonContainer>
      {currentStatus === 'to_plan' && (
        <>
          {cancelButton}
          {replaceButton}
        </>
      )}
      {currentStatus === 'cancel' && (
        <>
          {planButton}
          {replaceButton}
        </>
      )}
      {currentStatus === 'replace' && (
        <>
          {planButton}
          {cancelButton}
        </>
      )}
    </ButtonContainer>
  );

  let buttonText = '';
  if (currentStatus === 'to_plan') {
    buttonText = 'Планово';
  } else if (currentStatus === 'cancel') {
    buttonText = 'Відміна';
  } else if (currentStatus === 'replace') {
    buttonText = 'Заміна';
  }
  const styleDescr = lessonData ? lessonData.status : '';

  return (
    <Popover content={content} title="Зміна, відміна занять:">
      <LessonButtonCancel type="primary" aria-description={styleDescr}>
        {buttonText}
      </LessonButtonCancel>
    </Popover>
  );
};

export default StatusLesson;
