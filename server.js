const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const projectsRouter = require('./data/routers/projectsRouter');
// const actionsRouter = require('./data/routers/actionsRouter');

const server = express();

server.use(express.json());
server.use(logger('combined'));
server.use(helmet());
server.use(cors());

server.use('/api/projects', projectsRouter);
// server.use('/api/actions', actionsRouter);

module.exports = server;
