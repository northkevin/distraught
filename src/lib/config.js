// @flow

let cfg = {
  ignoredStackTraceLines: [],
  captureUncaught: false,
  captureUnhandled: false,
  heretic: {},
  db: {},
  cache: {},
  stats: {},
  pugOptions: {
    basedir: "",
  },
  email: {
    devEmail: null,
    guardedEnvironments: [],
  },
  pathToServerErrorTemplate: null,
};
const cache = {};
const heretic = {};
const db = {};
const stats = {};

module.exports = { cfg, cache, db, heretic, stats };
