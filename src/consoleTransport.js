export function consoleTransport(entry) {
  const line = `[${entry.timestamp}] ${entry.level.toUpperCase()}: ${entry.message}`;
  if (entry.level === 'error') {
    console.error(line, entry.meta);
  } else {
    console.log(line, entry.meta);
  }
}