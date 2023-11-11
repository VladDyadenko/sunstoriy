import axios from 'axios';

export const getLessonById = async id => {
  try {
    const { data } = await axios.get(`/lesson/lesson/${id}`);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
