const LEVELS = ['debug', 'info', 'warn', 'error'];

export function createLogger(options = {}) {
  const minLevel = options.level || 'debug';
  const transports = options.transports || [];

  function log(level, message, meta = {}) {
    const entry = { level, message, meta, timestamp: new Date().toISOString() };
    transports.forEach((transport) => transport(entry));
    return entry;
  }

  const logger = {};
  LEVELS.forEach((level) => {
    logger[level] = (message, meta) => log(level, message, meta);
  });
  logger.addTransport = (transport) => transports.push(transport);

  return logger;
}