export function createChildLogger(logger, context = {}) {
  const child = {};
  ['debug', 'info', 'warn', 'error'].forEach((level) => {
    child[level] = (message, meta = {}) => logger[level](message, { ...context, ...meta });
  });
  return child;
}