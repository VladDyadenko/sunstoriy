import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  ButtonCard,
  ButtonChildDelete,
  ChildrenCardWrapper,
  IconChildDelete,
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
            width={130}
            height={130}
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
        <ButtonCard to={`/child/${_id}`}>Переглянути</ButtonCard>
      </ChildrenCardWrapper>
    </>
  );
}

export default ChildrenCard;
