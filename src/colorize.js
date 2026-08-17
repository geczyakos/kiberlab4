const COLORS = {
  debug: '\x1b[36m', info: '\x1b[32m', warn: '\x1b[33m', error: '\x1b[31m',
};
const RESET = '\x1b[0m';

export function colorize(level, text) {
  const color = COLORS[level] || '';
  return `${color}${text}${RESET}`;
}