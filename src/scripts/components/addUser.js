import { sendQuery } from './api';
import { url, inputs } from '../index';
import { currentUsersList } from './users';
import { renderUsers } from './renderUsers';
import { v4 as uuidv4 } from 'uuid';

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
      // since API returns only ID === 11
      result.id = uuidv4();
      currentUsersList.push(result);
      renderUsers(currentUsersList);
      localStorage.setItem('users', JSON.stringify(currentUsersList));
      clearUnputs(inputs);
    });
};

export function setFormValue({ value, name }) {
  if (addressProperties.includes(name)) {
    formData.address[name] = value;
  } else {
    formData[name] = value;
  }
};

function clearUnputs(inputsList) {
  inputsList.forEach(input => {
    input.value = '';
  });
}
