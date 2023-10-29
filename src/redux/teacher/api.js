import axios from 'axios';

export const getTeacherById = async id => {
  try {
    const { data } = await axios.get(`/teacher/teacher/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
