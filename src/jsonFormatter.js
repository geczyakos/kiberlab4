export function toJsonLine(entry) {
  return JSON.stringify({
    ts: entry.timestamp,
    level: entry.level,
    msg: entry.message,
    ...entry.meta,
  });
}