import fs from 'fs';

export function createFileTransport(filePath) {
  return function fileTransport(entry) {
    const line = `[${entry.timestamp}] ${entry.level.toUpperCase()}: ${entry.message}\n`;
    fs.appendFile(filePath, line, () => {});
  };
}