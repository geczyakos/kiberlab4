const SENSITIVE_KEYS = ['password', 'token', 'secret', 'authorization'];

export function redactSensitiveFields(meta = {}) {
  const redacted = { ...meta };
  Object.keys(redacted).forEach((key) => {
    if (SENSITIVE_KEYS.includes(key.toLowerCase())) {
      redacted[key] = '[REDACTED]';
    }
  });
  return redacted;
}