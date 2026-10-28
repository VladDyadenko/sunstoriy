import { axiosWithAuth } from 'api/api.interceptors';

export const getAllChild = async () => {
  try {
    const { data } = await axiosWithAuth.get('/child');
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getChildById = async id => {
  try {
    const { data } = await axiosWithAuth.get(`/child/children/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
