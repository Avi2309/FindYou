'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/userController');

    // user Routes
    app.route('/users/:searchInput')
        .get(todoList.listAllMatchUsers);

};