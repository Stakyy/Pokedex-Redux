import axios from 'axios';

// Для кнопок предыдущего и следующуго покемона на странице Покемона
export const fetchAndSet = async (url: string, setState: Function, id: number) => {
  const response = await axios.get(`${url + id}/`);
  const data = response.data;
  setState(data);
};

export const loadData = async (
  url: string | undefined,
  setState: Function,
  setSecondState: Function = () => {},
) => {
  if (url !== undefined) {
    const response = await axios.get(url);
    const data = response.data;
    setState(data);
    setSecondState(false);
  }
};
