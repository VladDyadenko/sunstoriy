import { axiosWithAuth } from 'api/api.interceptors';

export const getExpenses = async () => {
  try {
    const { data } = await axiosWithAuth.get(`/expense`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
