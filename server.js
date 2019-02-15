const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const projectsRouter = require('./data/routers/projectsRouter');
const actionsRouter = require('./data/routers/actionsRouter');

const server = express();

server.use(express.json());
server.use(logger('combined'));
server.use(helmet());
server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.use(wrongRouteMiddleWare);

function wrongRouteMiddleWare(req, res) {
  res.status(500).json('<h1>YOU IN THE WRONG ROUTE MAN</h1>');
}

module.exports = server;
