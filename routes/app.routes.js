(function () {
  const path = require('path');
  const http = require('http');

  function setAppRoutes(app) {
    app.route('/').get((req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  }

  module.exports = setAppRoutes;
}());