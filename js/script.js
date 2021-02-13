// Selected elements
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar__item');

const hamb = document.querySelector('.hamburger');
const icon = document.querySelector('.hamburger--icon');

const userCards = document.querySelector('.users__cards');
const grid = document.querySelector('.users__swich--grid');
const list = document.querySelector('.users__swich--list');

// Change class active
links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// On click hamburger
const clickHamb = () => {
  icon.classList.toggle('toggle');
  sidebar.classList.toggle('show');
};
hamb.addEventListener('click', clickHamb);

// Swich list and card
list.addEventListener('click', function () {
  userCards.classList.add('users-list');
  const elements = document.querySelectorAll('.users__cards > .card');
  elements.forEach(el => el.classList.add('list'));
});

grid.addEventListener('click', function () {
  userCards.classList.remove('users-list');
  const elements = document.querySelectorAll('.users__cards > .card');
  elements.forEach(el => el.classList.remove('list'));
});

// For to long names
const limitDataLength = function (data, length = 17) {
  return data.length > length ? data.substring(0, length) + '...' : data;
};

// Get and render data
const renderData = function (data) {
  data.forEach(user => {
    const html = `
    <div class="card">
      <h3 class="card__title">Korisnik 0${user.id}</h3>
      <div class="card__group">
        <h4 class="card__label">Name</h4>
        <p class="card__data">${limitDataLength(user.name)}</p>
      </div>
      <div class="card__group">
        <h4 class="card__label">Username</h4>
        <p class="card__data">${user.username}</p>
      </div>
      <div class="card__group">
        <h4 class="card__label">Address</h4>
        <p class="card__data">${limitDataLength(user.address.street, 10)}, ${
      user.address.suite
    }</p>
      </div>
      <div class="card__group">
        <h4 class="card__label">Email</h4>
        <p class="card__data">${limitDataLength(user.email)}</p>
      </div>
      <div class="card__group">
        <h4 class="card__label">Web</h4>
        <p class="card__data">${user.website}</p>
      </div>
    </div>
  `;
    userCards.insertAdjacentHTML('beforeend', html);
  });
};

const getData = function () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => renderData(data));
};
getData();
