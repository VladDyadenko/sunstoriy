import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { localStorageHelper } from 'helpers/helperLocalStorage';
import { getDates } from 'components/FilterLesson/SelectDate/GetDateFunction';

export const useLessonsDates = (
  storadeOfficeKey,
  setLessonDates,
  reqMethodOffice,
  offices
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedDate = localStorageHelper.getData(storadeOfficeKey);

    if (storedDate) {
      const choesData = { offices, dateCurrentLesson: storedDate };
      setLessonDates(storedDate);
      dispatch(reqMethodOffice(choesData));
    } else {
      const startDateFormat = dayjs().startOf('week').format('YYYY-MM-DD');
      const endDateFormat = dayjs().endOf('week').format('YYYY-MM-DD');
      const dateString = [startDateFormat, endDateFormat];

      const startDate = new Date(dateString[0]);
      const endDate = new Date(dateString[1]);
      const dates = getDates(startDate, endDate);
      const initialDates = dates?.map(date => date.valueOf());
      const initialDateValues = initialDates?.map(date => date.valueOf());
      setLessonDates(initialDateValues);
      localStorageHelper.setData(storadeOfficeKey, initialDateValues);
      if (initialDateValues.length > 0) {
        const choesData = { offices, dateCurrentLesson: storedDate };
        dispatch(reqMethodOffice(choesData));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, reqMethodOffice, setLessonDates]);
};
