# logger-toolkit

A small, dependency-light Node.js logging library: level-based logging,
transports (console/file), formatters, child loggers, and more.

## Installation

​```
npm install logger-toolkit
​```

## Utilities

- `createLogger` – core logger with debug/info/warn/error levels
- `consoleTransport` – writes entries to the console
- `createFileTransport` – writes entries to a file
- `formatTimestamp` – human-readable timestamp formatting
- `toJsonLine` – serializes an entry as a single JSON line
- `colorize` – ANSI-colors console output by level
- `rotateIfNeeded` – rotates a log file once it exceeds a size limit
- `createChildLogger` – binds extra context to every log call
- `serializeError` – converts an Error into a plain, loggable object
- `redactSensitiveFields` – masks password/token/secret fields in meta
- `shouldLog` – checks an entry's level against a minimum level

## Usage

​```js
import { createLogger, consoleTransport } from 'logger-toolkit';

const logger = createLogger({ transports: [consoleTransport] });
logger.info('Server started', { port: 3000 });
​```

## License

MIT