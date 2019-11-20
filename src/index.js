'use strict';

import menu from './menu.json';
import cardTemplate from './templates/card.hbs';
import './css/styles.css';

const refs = {
  menuList: document.querySelector('.js-menu'),
  themesSelector: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

const markup = cardTemplate(menu);

refs.menuList.insertAdjacentHTML('afterbegin', markup);

// Themes

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const persistedTheme = localStorage.getItem('theme');

if (persistedTheme === Theme.LIGHT) {
  refs.body.classList.add(Theme.LIGHT);
} else {
  refs.body.classList.add(Theme.DARK);
  refs.themesSelector.setAttribute('checked', true);
}

refs.themesSelector.addEventListener('change', () => {
  refs.body.classList.toggle(Theme.DARK);

  if (refs.body.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
