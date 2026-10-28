import { Popconfirm } from 'antd';

import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  ButtonCard,
  ButtonChildDelete,
  ButtonChildEdit,
  ChildParence,
  ChildrenCardWrapper,
  IconChildDelete,
  IconChildEdit,
  ImedgeChild,
  ImedgeContainer,
  TitleCard,
  TitleContainer,
} from './ChildrenCard.styled';

import defaultImg from 'assets/images/Children/children_5.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChildById } from 'redux/child/childOperetion';
import { selectChildrenOperetion } from 'redux/child/childSelector';
import ButtonLoader from 'ui/ButtonLoader/ButtonLoader';

function ChildrenCard({ child }) {
  const { childImage, name, surname, _id, mather, age } = child;
  const dispatch = useDispatch();
  const operetion = useSelector(selectChildrenOperetion);
  return (
    <>
      <ChildrenCardWrapper>
        <ImedgeContainer>
          <ImedgeChild
            src={childImage ? childImage : defaultImg}
            alt="children"
            width={120}
            height={120}
          />
        </ImedgeContainer>
        <TitleContainer>
          <TitleCard>{name}</TitleCard>
          <TitleCard>{surname}</TitleCard>
          {age && <ChildParence>Років: {age}</ChildParence>}
          {mather && <ChildParence>Мама: {mather}</ChildParence>}
        </TitleContainer>
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
          onConfirm={() => dispatch(deleteChildById(_id))}
        >
          <ButtonChildDelete primary="true">
            {operetion === _id ? (
              <ButtonLoader height="30" width="30" />
            ) : (
              <IconChildDelete />
            )}
          </ButtonChildDelete>
        </Popconfirm>
        <ButtonChildEdit to={`/child/${_id}`}>
          <IconChildEdit />
        </ButtonChildEdit>
        <ButtonCard to={`/child/${_id}?source=buttonViewing`}>
          Переглянути
        </ButtonCard>
      </ChildrenCardWrapper>
    </>
  );
}

export default ChildrenCard;
