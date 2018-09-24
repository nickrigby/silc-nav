const server = require('node-http-server');
const Browser = require('zombie');

describe('silc nav module', function () {

  const browser = new Browser();

  before(function () {

    server.deploy({
      port: 9001
    });

    return browser.visit('http://localhost:9001/index.html');
  });

  describe('nav structure', function () {

    it('should have exactly 9 move back elements', function () {
      browser.assert.elements('#nav-0 .silc-nav__move--back', { exactly: 9 });
    });

    it('should have exactly 9 move forward elements', function () {
      browser.assert.elements('#nav-0 .silc-nav__move--forward', { exactly: 9 });
    });

    it('should have exactly 9 parent elements', function () {
      browser.assert.elements('#nav-0 .silc-nav__item--parent', { exactly: 9 });
    });

  });

  describe('nav move forward', function () {

    before(function () {
      return browser
        .fire('#nav-0 .silc-nav__move--forward', 'click');
    });

    it('should add exactly 3 hidden elements when clicked', function () {
      browser.assert.elements('#nav-0 .silc-nav__items--hidden', { exactly: 3 });
    });

  });

  describe('nav move back', function () {

    before(function () {
      return browser
        .fire('#nav-0 .silc-nav__move--back', 'click');
    });

    it('should add exactly 3 hidden elements when clicked', function () {
      browser.assert.elements('#nav-0 .silc-nav__items--hidden', { exactly: 3 });
    });

  });

});
