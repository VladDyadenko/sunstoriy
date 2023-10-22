import axios from 'axios';

export const getAllChild = async () => {
  try {
    const { data } = await axios.get('/child');
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getChildById = async id => {
  try {
    const { data } = await axios.get(`/child/children/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
