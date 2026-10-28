import { useEffect, useRef, useState } from 'react';
import {
  FotoBlock,
  FotoIcon,
  ImagePreview,
  PreviewFotoContainer,
  UpdateFileButton,
} from './UpdateAvatar.styled';

function UpdateAvatar({ setFieldValue, avatar, fileName }) {
  const fileRef = useRef(null);

  const [preview, setPreview] = useState(avatar);
  useEffect(() => {
    setPreview(avatar);
  }, [avatar]);
  return (
    <>
      <input
        type="file"
        hidden
        ref={fileRef}
        onChange={event => {
          const selectedFile = event.target.files[0];
          setFieldValue(`${fileName}`, selectedFile);
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () => {
            setPreview(reader.result);
          };
        }}
      />
      <FotoBlock>
        {preview ? (
          <ImagePreview src={preview} alt="preview" width={130} height={110} />
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

export default UpdateAvatar;
