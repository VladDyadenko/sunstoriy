import styled from 'styled-components';
import { BsFilePlus, BsFillXCircleFill } from 'react-icons/bs';
import { HiOutlineDocument } from 'react-icons/hi2';

export const IconDoc = styled(HiOutlineDocument)`
  width: 50px;
  height: 50px;
  fill: #fff;
  stroke: #1677ff;
`;
export const IconDocAdd = styled(BsFilePlus)`
  width: 50px;
  height: 50px;
  fill: #a9a9a9;
`;
export const UploadTitle = styled.h3`
  font-family: 'RobotoSlab';
  font-weight: 500;
  color: var(--main-green);
`;
export const DocContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  padding: 5px;
  border: 1px solid var(--main-green);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  cursor: pointer;
`;
export const PreviewBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 15px;
`;
export const PreviewImageContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  padding: 5px;
  border: 2px solid var(--main-green);
  border-radius: 8px;
`;
export const FileName = styled.p`
  max-height: 20px;
  margin-top: 5px;
  font-family: 'RobotoSlab';
  font-weight: 400;
  font-size: 12px;
  color: #2a2a2a;
`;
export const ButtonUpdateFile = styled.button`
  width: 110px;
  height: 110px;
  padding: 5px;
  border: 1px dashed #a9a9a9;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border: 1px dashed #1677ff;
  }
`;

export const IconDelete = styled(BsFillXCircleFill)`
  width: 22px;
  height: 22px;
  color: #1677ff;
  transition: color 0.02s;
`;

export const DeleteDocButton = styled.button`
  cursor: pointer;
  position: absolute;
  border: none;
  top: -7px;
  right: -7px;
  background: none;
  padding: 0;
  outline: none;
  transition: opacity 0.3s;

  &:hover {
    ${IconDelete} {
      color: #a52a2a;
    }
  }
`;
