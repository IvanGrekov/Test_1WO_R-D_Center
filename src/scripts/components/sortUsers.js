import { currentUsersList } from './users';
import { renderUsers } from './renderUsers';
import { clearUserInfo } from './renderUserInfo';

export let sortedList;
export let currentSorting;
export const sortingSymbol = '↑';

function deleteSortingSymbol() {
  currentSorting.innerText = currentSorting.innerText.replace(
    sortingSymbol, ''
  );
};

export function sortUsers(parameter, element) {
  if (currentSorting === element) {
    deleteSortingSymbol();
    currentSorting = null;

    return renderUsers(currentUsersList);
  }

  if (currentSorting) {
    deleteSortingSymbol();
  }

  currentSorting = element;
  currentSorting.innerText += ` ${sortingSymbol}`;

  sortedList = [...currentUsersList].sort((prevUser, currentUser) => (
    prevUser[parameter].localeCompare(currentUser[parameter])
  ));

  renderUsers(sortedList);
  clearUserInfo();
};

export function clearCurrentSorting() {
  deleteSortingSymbol();
  currentSorting = null;
}
