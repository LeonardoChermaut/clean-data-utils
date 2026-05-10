/**
 * Shows an alert with formatted debug information.
 * @param message The main debug message.
 * @param context Additional context data to stringify.
 * @returns void
 */
export const showAlertForDebug = <TContext = unknown>(
  message: string,
  context?: TContext,
): void => {
  if (typeof window === "undefined" || !window.alert) {
    return;
  }

  const contextString = context ? `\n\nContext:\n${JSON.stringify(context, null, 2)}` : "";
  window.alert(`[DEBUG] ${message}${contextString}`);
};
