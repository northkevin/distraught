// @flow
const StatsD = require("hot-shots");

type OptionsType = {
  prefix: string,
};

module.exports = {
  addStatsDConnection(name: string, opts: OptionsType, stats: Object) {
    stats[name] = new StatsD(opts);
  },
};
