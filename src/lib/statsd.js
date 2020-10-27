// @flow
const StatsD = require("hot-shots");

type OptionsType = {
  host?: string,
  port?: number,
  prefix?: string,
  suffix?: string,
  tagPrefix?: string,
  tagSeparator?: string,
  globalize?: boolean,
  cacheDns?: boolean,
  cacheDnsTtl?: number,
  mock?: boolean,
  globalTags?: Object,
  maxBufferSize?: number,
  bufferFlushInterval?: number,
  telegraf?: boolean,
  sampleRate?: number,
  errorHandler?: function,
  useDefaultRoute?: boolean,
  protocol?: string,
  path?: string,
  stream?: Object,
  udsGracefulErrorHandling?: boolean,
  udsGracefulRestartRateLimit?: number,
};

module.exports = {
  addStatsDConnection(name: string, opts: OptionsType, stats: Object) {
    stats[name] = new StatsD(opts);
  },
};
