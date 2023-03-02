import axios from 'axios';
axios.defaults.baseURL = 'https://63ff445a370fe830d9e2c1ba.mockapi.io/api/v1';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
