import { userInfo } from '../index';

export function renderUserInfo(user) {
  return (`
    <h2>Selected user</h2>

    <div class="user-info section-selected-user__info">
      <div class="user-info__contacts">
        <h3 class="user-info__name">Name: ${user.name}</h3>

        <h4 class="user-info__username">Username: ${user.username}</h4>

        <a
          class="user-info__contact-data-wrapper"
          href="tel:+${user.phone}"
        >
          <h4 class="user-info__label">
              Phone
          </h4>

          <p class="user-info__phone">
            +${user.phone}
          </p>
        </a>

        <address class="user-info__address-wrapper">
          <h4 class="user-info__label">
            Address
          </h4>

          <p class="user-info__address">
            <b>street</b>: ${user.address.street || 'not assiged'}
            <br>
            <b>suite</b>: ${user.address.suite || 'not assiged'}
            <br>
            <b>city</b>: ${user.address.city || 'not assiged'}
            <br>
            <b>zipcode</b>: ${user.address.zipcode || 'not assiged'}
          </p>
        </address>
      </div>
    </div>
  `);
}

export function clearUserInfo() {
  userInfo.innerHTML = (`
    <h2>There isn't a selected user</h2>
  `);
}
