'use strict';
const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const ESC_KEY = 'Escape';

const onEscPress = (evt) => {
  if (evt.key === ESC_KEY) {
  closeMenu();
  }
};

const openMenu = () => {
  pageHeader.classList.remove('page-header--nav-closed');
  headerToggle.classList.remove('main-nav__toggle--closed');
  mainNav.classList.remove('main-nav--closed');
  pageHeader.classList.add('page-header--nav-opened');
  headerToggle.classList.add('main-nav__toggle--opened');
  mainNav.classList.add('main-nav--opened');
  document.addEventListener('keydown', onEscPress);
}

const closeMenu = () => {
  pageHeader.classList.add('page-header--nav-closed');
  headerToggle.classList.add('main-nav__toggle--closed');
  mainNav.classList.add('main-nav--closed');
  pageHeader.classList.remove('page-header--nav-opened');
  headerToggle.classList.remove('main-nav__toggle--opened');
  mainNav.classList.remove('main-nav--opened');
  document.removeEventListener('keydown', onEscPress);
}

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.contains('page-header--nav-closed') ?
  openMenu() :
  closeMenu()
});
