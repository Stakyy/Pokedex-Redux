import axios from 'axios';

export const fetchAndSet = async (url: string, setState: Function, id: number) => {
  const response = await axios.get(`${url + id}/`);
  const data = response.data;
  setState(data);
};
