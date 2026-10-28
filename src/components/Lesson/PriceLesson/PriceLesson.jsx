import { useEffect, useState } from 'react';
import {
  InputPrice,
  PriceContainer,
  TitlePriceLesson,
} from './PriceLesson.styled';

const PriceLesson = ({ setFieldValue, currentPrice, lesson }) => {
  const [price, setPrice] = useState(lesson ? lesson.price : currentPrice);
  useEffect(() => {
    if (lesson) {
      setPrice(lesson.price);
    }
  }, [lesson]);

  const handleInputChange = e => {
    const currentPrice = e.target.value;
    setPrice(currentPrice);
    setFieldValue('price', currentPrice);
  };
  return (
    <PriceContainer>
      <TitlePriceLesson>Вартість:</TitlePriceLesson>
      <InputPrice type="number" value={price} onChange={handleInputChange} />
      <TitlePriceLesson>грн.</TitlePriceLesson>
    </PriceContainer>
  );
};

export default PriceLesson;
