import { toJsonLine } from '../src/jsonFormatter';

test('serializes an entry into a single JSON line', () => {
  const line = toJsonLine({
    timestamp: '2026-01-01T00:00:00.000Z',
    level: 'info',
    message: 'started',
    meta: { pid: 123 },
  });

  const parsed = JSON.parse(line);
  expect(parsed.level).toBe('info');
  expect(parsed.msg).toBe('started');
  expect(parsed.pid).toBe(123);
});