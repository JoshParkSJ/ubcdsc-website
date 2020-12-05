import axios from 'axios';

export const getEvents = async () => {
  const response = await axios.get('http://localhost:3003/events');
  console.log(response);
  return response.data;
};
