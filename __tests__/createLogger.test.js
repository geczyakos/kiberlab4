import { createLogger } from '../src/createLogger';

test('calls registered transports with the log entry', () => {
  const received = [];
  const logger = createLogger({ transports: [(entry) => received.push(entry)] });

  logger.info('hello world', { userId: 1 });

  expect(received).toHaveLength(1);
  expect(received[0].level).toBe('info');
  expect(received[0].message).toBe('hello world');
  expect(received[0].meta).toEqual({ userId: 1 });
});