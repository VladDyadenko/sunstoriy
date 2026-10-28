import { Popover } from 'antd';
import {
  ButtonContainer,
  CancelBtn,
  LessonButtonCancel,
  PlanBtn,
  ReplaceBtn,
} from './StatusLesson.styled';
import { useDispatch } from 'react-redux';
import { updateLesson } from 'redux/Lesson/lessonOperetion';

const StatusLesson = ({ lessonData, currentStatus, setCurrentStatus }) => {
  const { _id } = lessonData;

  const dispatch = useDispatch();

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
  const styleDescr = currentStatus ? currentStatus : '';

  return (
    <Popover
      trigger="hover"
      content={content}
      mouseEnterDelay={0.4}
      title="Зміна, відміна занять:"
    >
      <LessonButtonCancel type="primary" aria-description={styleDescr}>
        {buttonText}
      </LessonButtonCancel>
    </Popover>
  );
};

export default StatusLesson;
