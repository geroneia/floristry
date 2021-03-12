'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.main-nav__toggle');
var mainNav = document.querySelector('.main-nav');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--nav-closed')) {
    pageHeader.classList.remove('page-header--nav-closed');
    headerToggle.classList.remove('main-nav__toggle--closed');
    mainNav.classList.remove('main-nav--closed');
    pageHeader.classList.add('page-header--nav-opened');
    headerToggle.classList.add('main-nav__toggle--opened');
    mainNav.classList.add('main-nav--opened');
  } else {
    pageHeader.classList.add('page-header--nav-closed');
    headerToggle.classList.add('main-nav__toggle--closed');
    mainNav.classList.add('main-nav--closed');
    pageHeader.classList.remove('page-header--nav-opened');
    headerToggle.classList.remove('main-nav__toggle--opened');
    mainNav.classList.remove('main-nav--opened');
  }
});
