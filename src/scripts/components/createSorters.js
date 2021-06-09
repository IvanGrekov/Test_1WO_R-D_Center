import { sortUsers } from './sortUsers';

export function createSorters() {
  const sorterByName = document.getElementById('name-sorting');

  sorterByName.addEventListener('click', () => {
    sortUsers('name', sorterByName);
  });

  const sorterByUsername = document.getElementById('username-sorting');

  sorterByUsername.addEventListener('click', () => {
    sortUsers('username', sorterByUsername);
  });

  const sorterByEmail = document.getElementById('email-sorting');

  sorterByEmail.addEventListener('click', () => {
    sortUsers('email', sorterByEmail);
  });

  const sorterByWebsite = document.getElementById('website-sorting');

  sorterByWebsite.addEventListener('click', () => {
    sortUsers('website', sorterByWebsite);
  });
}
