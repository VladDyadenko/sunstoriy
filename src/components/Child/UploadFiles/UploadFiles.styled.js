import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { BsFilePlus } from 'react-icons/bs';
import { CirclesWithBar } from 'react-loader-spinner';

export const IconDoc = styled(BsFileEarmarkText)`
  width: 20px;
  height: 20px;
  color: var(--main-green);
`;

export const IconDocAdd = styled(BsFilePlus)`
  width: 50px;
  height: 50px;
  fill: #a9a9a9;
`;

export const UploadTitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--main-green);
  font-family: 'RobotoSlab';
`;

export const DocContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border: 1px solid var(--bg-main-color);
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    border-color: var(--main-green);
  }
`;

export const PreviewBlock = styled.div`
  margin-top: 15px;
`;

export const PreviewImageContainer = styled.div`
  margin-bottom: 10px;
`;

export const FileName = styled.span`
  flex: 1;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  color: #2a2a2a;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--main-green);
  }
`;

export const FileInput = styled.input`
  margin: 10px 0;
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

export const IconDelete = styled(AiOutlineDelete)`
  width: 20px;
  height: 20px;
`;

export const DeleteDocButton = styled.button`
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;

  &:hover {
    color: #cc0000;
  }

  &:disabled {
    color: rgba(169, 169, 169, 0.6);
    cursor: not-allowed;

    &:hover {
      color: rgba(169, 169, 169, 0.6);
    }
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const LoaderContainer = styled(CirclesWithBar)`
  margin: 0 10px;
`;
