import axios from 'axios';

export const getExpenses = async () => {
  try {
    const { data } = await axios.get(`/expense`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
