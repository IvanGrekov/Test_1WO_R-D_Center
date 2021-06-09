import {
  table,
  tableBody,
  loader,
} from '../index';
import { selectUser } from './users';

export function renderUsers(array) {
  const tableRows = (
    array.map((person, index) => {
      const newTableRow = document.createElement('tr');

      newTableRow.classList.add('people-table__row');

      if (index % 2) {
        newTableRow.classList.add('people-table__row--even');
      }

      newTableRow.setAttribute('title', `Select user #${person.id}`);

      newTableRow.innerHTML = (`
        <th class="people-table__title">
          ${index + 1}
        </th>
        <td class="people-table__cell">
          ${person.name}
        </td>
        <td class="people-table__cell">
          ${person.username}
        </td>
        <td class="people-table__cell">
          <a href="mailto:${person.email}">
            ${person.email}
          </a>
        </td>
        <td class="people-table__cell">
          <a
            href="https://${person.website}"
            target="_blank"
            noopener
          >
            ${person.website}
          </a>
        </td>
      `);

      newTableRow.addEventListener('click', (event) => {
        selectUser(person.id, event.currentTarget);
      });

      return newTableRow;
    })
  );

  tableBody.innerHTML = '';
  tableBody.append(...tableRows);
  loader.classList.add('loader--hidden');
  table.classList.remove('people-table--hidden');
}
