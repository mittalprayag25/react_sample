const config = {
  dev: process.env.LOCAL,
  stage: process.env.STAGE,
  prod: process.env.PRODUCTION,
  endpoint: {
    userRoute: '/users',
    authenticationRoute: '/authentication',
    mailerRoute: '/mailer',
    forgotPasswordRoute: '/users/{token}/forgotPassword'
  }
};

module.exports = config;
