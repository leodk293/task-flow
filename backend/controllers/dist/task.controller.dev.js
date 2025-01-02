"use strict";

var Task = require('../modules/task.module.js');

function getAllTask(req, res) {
  var tasks;
  return regeneratorRuntime.async(function getAllTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Task.find());

        case 3:
          tasks = _context.sent;
          res.status(200).json(tasks);
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

function createTask(req, res) {
  var _req$body, title, description, priority, user, newTask, task;

  return regeneratorRuntime.async(function createTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, title = _req$body.title, description = _req$body.description, priority = _req$body.priority;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findById(req.user.id));

        case 4:
          user = _context2.sent;
          newTask = new Task({
            title: title,
            description: description,
            priority: priority,
            user: user.id
          });
          _context2.next = 8;
          return regeneratorRuntime.awrap(newTask.save());

        case 8:
          task = _context2.sent;
          user.tasks.push(task.id);
          _context2.next = 12;
          return regeneratorRuntime.awrap(user.save());

        case 12:
          res.status(201).json(task);
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15]]);
}

;

function updateTask(req, res) {
  var _req$body2, title, description, priority, task;

  return regeneratorRuntime.async(function updateTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, priority = _req$body2.priority;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Task.findById(req.params.id));

        case 4:
          task = _context3.sent;

          if (!(task.user.toString() !== req.user.id)) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(401).json({
            message: 'Not authorized'
          }));

        case 7:
          task.title = title;
          task.description = description;
          task.priority = priority;
          _context3.next = 12;
          return regeneratorRuntime.awrap(task.save());

        case 12:
          res.status(200).json(task);
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 15]]);
}

function deleteTask(req, res) {
  var task;
  return regeneratorRuntime.async(function deleteTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Task.findById(req.params.id));

        case 3:
          task = _context4.sent;

          if (!(task.user.toString() !== req.user.id)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(401).json({
            message: 'Not authorized'
          }));

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(task.remove());

        case 8:
          res.status(200).json({
            message: 'Task deleted successfully'
          });
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

module.exports = {
  getAllTask: getAllTask,
  createTask: createTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};