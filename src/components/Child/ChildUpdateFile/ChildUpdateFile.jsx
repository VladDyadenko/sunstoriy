import { useRef, useState } from 'react';
import {
  ChildImage,
  FotoBlock,
  FotoIcon,
  PreviewFotoContainer,
  UpdateFileButton,
} from './ChildUpdateFile.styled';

function ChildUpdateFile({ setFieldValue, file }) {
  const fileRef = useRef(null);

  const [preview, setPreview] = useState('');

  return (
    <>
      <input
        type="file"
        hidden
        ref={fileRef}
        onChange={event => {
          const selectedFile = event.target.files[0];
          setFieldValue('childImage', selectedFile);
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () => {
            setPreview(reader.result);
          };
        }}
      />
      <FotoBlock>
        {preview ? (
          <ChildImage src={preview} alt="preview" width={110} height={110} />
        ) : (
          <PreviewFotoContainer>
            <FotoIcon />
          </PreviewFotoContainer>
        )}
        <UpdateFileButton
          type="button"
          onClick={() => {
            fileRef.current.click();
          }}
        >
          Додайте фото
        </UpdateFileButton>
      </FotoBlock>
    </>
  );
}

export default ChildUpdateFile;
