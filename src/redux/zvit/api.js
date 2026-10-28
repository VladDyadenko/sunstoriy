import { axiosWithAuth } from 'api/api.interceptors';

export const getZvitOneMonthTotal = async choesData => {
  try {
    const { data } = await axiosWithAuth.get(`/zvit/one_month_total`, {
      params: choesData,
    });

    return data;
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};
