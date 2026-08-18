import fs from 'fs';

export function rotateIfNeeded(filePath, maxBytes = 5 * 1024 * 1024) {
  try {
    const stats = fs.statSync(filePath);
    if (stats.size >= maxBytes) {
      const rotatedPath = `${filePath}.${Date.now()}.old`;
      fs.renameSync(filePath, rotatedPath);
    }
  } catch (_) {
    // file doesn't exist yet, nothing to rotate
  }
}