import { url, userInfo } from '../index';
import { sendQuery } from './api';
import { renderUsers } from './renderUsers';
import { renderUserInfo, clearUserInfo } from './renderUserInfo';
import { currentSorting, clearCurrentSorting } from './sortUsers';

export let currentUsersList = JSON.parse(localStorage.getItem('users')) || null;

let currentTableRow;

export function getUsers() {
  if (currentUsersList) {
    renderUsers(currentUsersList);

    return;
  }

  sendQuery(url)
    .then(users => {
      currentUsersList = [...users];
      localStorage.setItem('users', JSON.stringify(currentUsersList));
      renderUsers(users);
    });
}

export function selectUser(userId, element) {
  const selectedUser = currentUsersList.find(user => user.id === userId);
  const changeActiveState = () => {
    currentTableRow.classList.toggle('people-table__row--active');
  };

  if (currentTableRow === element) {
    clearUserInfo();
    changeActiveState();
    currentTableRow.setAttribute('title', `Select user #${userId}`);
    currentTableRow = null;

    return;
  }

  if (currentTableRow) {
    changeActiveState();
  }

  currentTableRow = element;
  currentTableRow.setAttribute('title', 'Clear additional info');
  changeActiveState();
  userInfo.innerHTML = renderUserInfo(selectedUser);
  userInfo.append(createButtonRemoveUser(selectedUser.id));
};

function createButtonRemoveUser(userId) {
  const button = document.createElement('button');

  button.innerText = 'Remove user';
  button.classList.add('user-info__remove-user');

  button.addEventListener('click', () => {
    deleteUser(userId);
  });

  return button;
}

function deleteUser(userId) {
  // following query only for example, because this API not allow changing data
  sendQuery(`${url}/${userId}`, { method: 'DELETE' })
    .then(() => {
      currentUsersList = currentUsersList.filter(user => user.id !== userId);
      localStorage.setItem('users', JSON.stringify(currentUsersList));
      clearUserInfo();

      if (currentSorting) {
        clearCurrentSorting();
      }

      renderUsers(currentUsersList);
    });
};
