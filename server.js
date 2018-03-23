/**
* Module dependencies.
*/
const express = require('./framework/express');
//import express from './framework/express';
// Initialize server
function startServer() {
  // Initialize express
  const app = express.init();
  // Start up the server on the port specified in the config

  app.listen(3000, () => {
    console.log('App started on port 3000');
  });

  module.exports = app;
}

startServer();