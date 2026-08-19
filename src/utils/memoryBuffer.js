const buffer = [];

// Buffers log entries in memory so they can be flushed to the
// transport in efficient batches instead of one at a time.
export function bufferLogEntry(entry) {
  buffer.push(entry);
  return buffer;
}

export function getBufferedEntries() {
  return buffer;
}