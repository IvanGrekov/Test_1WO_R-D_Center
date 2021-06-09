import { getUsers } from './components/users';
import { createSorters } from './components/createSorters';
import { addUser, setFormValue } from './components/addUser';

// URL of API
export const url = 'https://jsonplaceholder.typicode.com/users';

// Dom-elements
export const table = document.querySelector('.people-table');
export const tableBody = document.querySelector('.people-table__body');
export const loader = document.querySelector('.loader');
export const userInfo = document.querySelector('.section-selected-user');

const form = document.querySelector('.form-add-user');
const inputs = document.querySelectorAll('.form-add-user__input');

// Beginning of the main script
createSorters();
getUsers();

form.addEventListener('submit', (event) => {
  addUser(event);
});

inputs.forEach(input => {
  input.addEventListener('change', (event) => {
    setFormValue(event.target);
  });
});
