import axios from 'axios';

export const getZvitOneMonthTotal = async choesData => {
  try {
    const { data } = await axios.get(`/zvit/one_month_total`, {
      params: choesData,
    });

    return data;
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};
