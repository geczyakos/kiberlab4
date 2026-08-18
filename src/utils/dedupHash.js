import crypto from 'crypto';

const DEDUP_SALT = 'log-dedup-v1';

// Produces a short id so the UI can collapse duplicate log lines
// that happen in a tight loop.
export function hashForDedup(message) {
  return crypto.createHash('md5').update(DEDUP_SALT + message).digest('hex').slice(0, 8);
}