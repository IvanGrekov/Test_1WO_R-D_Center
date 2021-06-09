import { sendQuery } from './api';
import { url } from '../index';
import { currentUsersList } from './users';
import { renderUsers } from './renderUsers';

let formData = setInititalData();
const addressProperties = 'street suite city zipcode';

export function setInititalData() {
  return {
    name: '',
    username: '',
    email: '',
    website: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
  };
}

export function addUser(event) {
  event.preventDefault();

  const options = {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  formData = setInititalData();

  sendQuery(url, options)
    .then(result => {
      currentUsersList.push(result);
      renderUsers(currentUsersList);
      localStorage.setItem('users', JSON.stringify(currentUsersList));
    });
};

export function setFormValue({ value, name }) {
  if (addressProperties.includes(name)) {
    formData.address[name] = value;
  } else {
    formData[name] = value;
  }
};
