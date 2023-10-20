import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  ButtonCard,
  ButtonChildDelete,
  ButtonChildEdit,
  ChildrenCardWrapper,
  IconChildDelete,
  IconChildEdit,
  ImedgeChild,
  ImedgeContainer,
  TitleCard,
  TitleContainer,
} from './ChildrenCard.styled';

import defaultImg from 'assets/images/Children/childrenPage_2.png';
import { useDispatch } from 'react-redux';
import { deleteChildById } from 'redux/child/childOperetion';

function ChildrenCard({ child }) {
  const { childImage, name, surname, _id } = child;
  const dispatch = useDispatch();
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
            <IconChildDelete />
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
