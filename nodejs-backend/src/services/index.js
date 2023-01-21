const users = require("./users/users.service.js");
const customers = require("./customers/customers.service.js");
const subscribers = require("./subscribers/subscribers.service.js");
const posts = require("./posts/posts.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(customers);
  app.configure(subscribers);
  app.configure(posts);
  // ~cb-add-configure-service-name~
};
