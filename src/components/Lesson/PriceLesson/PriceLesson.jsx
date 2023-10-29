import { useState } from 'react';
import {
  InputPrice,
  PriceContainer,
  TitlePriceLesson,
} from './PriceLesson.styled';

const PriceLesson = () => {
  const [price, setPrice] = useState(350);

  const handleInputChange = e => {
    const currentPrice = e.target.value;
    setPrice(currentPrice);
  };
  return (
    <PriceContainer>
      <TitlePriceLesson>Вартість:</TitlePriceLesson>
      <InputPrice type="text" value={price} onChange={handleInputChange} />
      <TitlePriceLesson>грн.</TitlePriceLesson>
    </PriceContainer>
  );
};

export default PriceLesson;
