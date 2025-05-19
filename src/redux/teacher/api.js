import { axiosWithAuth } from 'api/api.interceptors';

export const getTeacherById = async id => {
  try {
    const { data } = await axiosWithAuth.get(`/teacher/teacher/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
