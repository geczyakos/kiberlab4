export function serializeError(err) {
  if (!(err instanceof Error)) return err;
  return {
    name: err.name,
    message: err.message,
    stack: err.stack,
  };
}