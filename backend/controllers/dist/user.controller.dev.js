"use strict";

var User = require('../modules/user.module.js');

function getAllUser(req, res) {
  var users;
  return regeneratorRuntime.async(function getAllUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.find());

        case 3:
          users = _context.sent;
          res.status(200).json(users);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

;

function createUser(req, res) {
  var _req$body, name, email, newUser, user;

  return regeneratorRuntime.async(function createUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email;
          newUser = new User({
            name: name,
            email: email
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(newUser.save());

        case 5:
          user = _context2.sent;
          res.status(201).json(user);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

;
module.exports = {
  getAllUser: getAllUser,
  createUser: createUser
};