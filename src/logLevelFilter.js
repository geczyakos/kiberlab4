const LEVEL_ORDER = { debug: 0, info: 1, warn: 2, error: 3 };

export function shouldLog(entryLevel, minLevel) {
  return LEVEL_ORDER[entryLevel] >= LEVEL_ORDER[minLevel];
}