import { useRef, useState } from 'react';
import { ChildImage } from '../ChildUpdateFile/ChildUpdateFile.styled';
import { Modal } from 'antd';
import {
  ButtonUpdateFile,
  DeleteDocButton,
  DocContainer,
  FileName,
  IconDelete,
  IconDoc,
  IconDocAdd,
  PreviewBlock,
  PreviewImageContainer,
  UploadTitle,
} from './UploadFiles.styled';

function UploadFiles({ setFieldValue, childFiles }) {
  const fileRef = useRef(null);

  const [previews, setPreviews] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const handlePreviewImage = imageSrc => {
    setPreviewOpen(true);
    setImagePreview(imageSrc);
  };

  const handleCancelImagePreview = () => {
    setImagePreview(null);
  };

  const handleFileDelete = index => {
    const newChildFiles = [...childFiles];
    const newPreviews = [...previews];

    newChildFiles.splice(index, 1); // Удаляем файл из списка childFiles
    newPreviews.splice(index, 1); // Удаляем превью из списка previews

    setFieldValue('childFiles', newChildFiles); // Обновляем состояние childFiles
    setPreviews(newPreviews); // Обновляем состояние previews
  };

  const handleFileChange = async event => {
    const selectedFiles = event.target.files;
    const newFilesArray = Array.from(selectedFiles);

    const newPreviews = [];
    for (const file of newFilesArray) {
      const reader = new FileReader();
      await new Promise(resolve => {
        reader.onload = () => {
          newPreviews.push(reader.result);
          resolve();
        };
        reader.readAsDataURL(file);
      });
    }

    setFieldValue('childFiles', [...childFiles, ...newFilesArray]);
    setPreviews([...previews, ...newPreviews]);
  };
 
  return (
    <>
      <Modal
        open={previewOpen}
        onCancel={() => {
          setPreviewOpen(false);
          handleCancelImagePreview();
        }}
        footer={null}
      >
        <img
          alt="preview"
          style={{
            width: '100%',
          }}
          src={imagePreview}
        />
      </Modal>
      <input
        type="file"
        hidden
        ref={fileRef}
        onChange={handleFileChange}
        multiple
        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
      />
      <UploadTitle>Загрузіть сюди необхідні файли:</UploadTitle>
      <PreviewBlock>
        {previews.length > 0 &&
          previews.map((preview, index) => {
            const file = childFiles[index];
            const fileNameSubstr = file.name.substring(0, 10);
            if (file.type.startsWith('image/')) {
              // Если это изображение, отображаем как изображение
              return (
                <PreviewImageContainer
                  key={index}
                  onClick={() => handlePreviewImage(preview)}
                >
                  <ChildImage
                    src={preview}
                    alt={`preview-${index}`}
                    width={95}
                    height={95}
                  />
                  <DeleteDocButton
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      handleFileDelete(index);
                    }}
                  >
                    <IconDelete />
                  </DeleteDocButton>
                </PreviewImageContainer>
              );
            } else {
              return (
                <DocContainer
                  key={index}
                  onClick={e => {
                    e.stopPropagation();
                    handleFileDelete(index);
                  }}
                >
                  <IconDoc />
                  <FileName>{fileNameSubstr}...</FileName>
                  <DeleteDocButton
                    type="button"
                    onClick={() => handleFileDelete(index)}
                  >
                    <IconDelete />
                  </DeleteDocButton>
                </DocContainer>
              );
            }
          })}
        <ButtonUpdateFile type="button" onClick={() => fileRef.current.click()}>
          <IconDocAdd />
        </ButtonUpdateFile>
      </PreviewBlock>
    </>
  );
}

export default UploadFiles;
