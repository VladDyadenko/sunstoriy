import { axiosWithAuth } from 'api/api.interceptors';

export const getLessonById = async id => {
  try {
    const { data } = await axiosWithAuth.get(`/lesson/lesson/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
