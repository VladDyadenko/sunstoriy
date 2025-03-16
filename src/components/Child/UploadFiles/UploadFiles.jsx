import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  downloadFile,
  uploadFile,
  deleteFile,
} from 'redux/child/childOperetion';
import {
  UploadTitle,
  PreviewBlock,
  DeleteDocButton,
  IconDelete,
  DocContainer,
  IconDoc,
  FileName,
  ButtonUpdateFile,
} from './UploadFiles.styled';
import { Popconfirm, Upload } from 'antd';
import { QuestionCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { selectChildrenOperetion } from 'redux/child/childSelector';
import { CirclesWithBar } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

const UploadFiles = ({
  arrayFile,
  childFiles = [],
  setFieldValue,
  childId,
}) => {
  const [files, setFiles] = useState([]);
  const [loadingFile, setLoadingFile] = useState(null);
  const dispatch = useDispatch();

  const operetion = useSelector(selectChildrenOperetion);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const source = searchParams.get('source');

  useEffect(() => {
    if (arrayFile) {
      const formattedFiles = Array.isArray(arrayFile)
        ? arrayFile.map(file => {
            if (typeof file === 'string') {
              return { name: file, path: file, type: 'unknown' };
            }
            return {
              name: String(
                file.filename || file.originalname || file.name || file
              ),
              path: String(file.path || file),
              type: String(file.mimetype || file.type || 'unknown'),
            };
          })
        : typeof arrayFile === 'string'
        ? [{ name: arrayFile, path: arrayFile, type: 'unknown' }]
        : [];

      setFiles(formattedFiles);
      setFieldValue('childFiles', JSON.parse(JSON.stringify(formattedFiles)));
    }
  }, [arrayFile, setFieldValue]);

  const handleFileClick = async file => {
    if (!file) return;
    const fileName = file.name || (typeof file === 'string' ? file : null);
    if (fileName) {
      setLoadingFile(fileName);
      try {
        await dispatch(downloadFile(fileName)).unwrap();
      } finally {
        setLoadingFile(null);
      }
    }
  };

  const handleDelete = async file => {
    if (!file || !childId) return;
    const fileName = file.name || (typeof file === 'string' ? file : null);
    if (!fileName) {
      console.error('No file name provided for deletion');
      return;
    }

    try {
      await dispatch(deleteFile({ fileName, childId })).unwrap();
      const updatedFiles = files.filter(f => (f.name || f) !== fileName);
      setFiles(updatedFiles);
      setFieldValue('childFiles', updatedFiles);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div>
      <UploadTitle>Додати документи (PDF, TXT, DOCX):</UploadTitle>
      <Upload
        accept=".pdf,.txt,.docx"
        showUploadList={false}
        multiple={true}
        disabled={source === 'buttonViewing'}
        customRequest={async ({ file, onSuccess, onError }) => {
          try {
            const result = await dispatch(uploadFile({ file, childId }));
            if (result.payload) {
              const newFile = {
                name: String(result.payload.filename),
                path: String(result.payload.path),
                type: String(result.payload.mimetype || 'unknown'),
              };
              setFiles(prev => [...prev, newFile]);
              setFieldValue('childFiles', [
                ...childFiles,
                JSON.parse(JSON.stringify(newFile)),
              ]);
              onSuccess();
            } else {
              onError(new Error('Upload failed'));
            }
          } catch (error) {
            onError(error);
          }
        }}
      >
        <ButtonUpdateFile
          type="primary"
          icon={<UploadOutlined />}
          disabled={source === 'buttonViewing'}
        >
          Виберіть файл
        </ButtonUpdateFile>
      </Upload>
      <PreviewBlock>
        {files.map((file, index) => {
          const fileName = file.name || file;
          const isLoading = loadingFile === fileName;
          return (
            <DocContainer
              key={index}
              onClick={() => handleFileClick(file)}
              title="Натисніть для завантаження"
              style={{ position: 'relative' }}
            >
              {isLoading ? (
                <CirclesWithBar
                  height="20px"
                  width="20px"
                  color="#006400"
                  wrapperStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  visible={true}
                  ariaLabel="circles-with-bar-loading"
                />
              ) : (
                <IconDoc />
              )}
              <FileName>{fileName}</FileName>
              <Popconfirm
                title="Видалити файл?"
                description="Ви впевнені, що хочете видалити цей файл?"
                icon={
                  <QuestionCircleOutlined
                    style={{
                      color: 'red',
                    }}
                  />
                }
                onConfirm={e => {
                  e.stopPropagation();
                  handleDelete(file);
                }}
              >
                {operetion === childId ? (
                  <CirclesWithBar
                    height="25px"
                    width="25px"
                    color="#539536"
                    wrapperStyle={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    visible={true}
                    ariaLabel="circles-with-bar-loading"
                  />
                ) : (
                  <DeleteDocButton
                    disabled={source === 'buttonViewing'}
                    type="button"
                    title="Видалити файл"
                    onClick={e => {
                      e.stopPropagation();
                    }}
                  >
                    <IconDelete />
                  </DeleteDocButton>
                )}
              </Popconfirm>
            </DocContainer>
          );
        })}
      </PreviewBlock>
    </div>
  );
};

export default UploadFiles;
