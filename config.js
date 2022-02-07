'use strict';

const homePage = require('./content/home');
const secondPage = require('./content/secondPage');
const thirdPage = require('./content/thirdPage');

module.exports = {
  homePage,
  secondPage,
  thirdPage,
  url: '/',
  name: 'Set full project name',
  shortName: 'Set short project name',
  description: '',
  pathPrefix: '/example/master-impact/path',
};
