/**
 * Logs a message to the console with a timestamp and optional context.
 * @param message The debug message to log.
 * @param context Additional context data to log.
 * @param level The console level to use (log, warn, error).
 * @returns void
 */
export const logMessageForDebug = <TContext = unknown>(
  message: string,
  context?: TContext,
  level: "log" | "warn" | "error" = "log",
): void => {
  if (typeof console === "undefined") {
    return;
  }

  const timestamp = new Date().toISOString();
  const formattedMessage = `[DEBUG] [${timestamp}] ${message}`;

  if (context !== undefined) {
    console[level](formattedMessage, context);
  } else {
    console[level](formattedMessage);
  }
};
