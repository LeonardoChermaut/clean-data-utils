/**
 * Gets an environment variable value as a string.
 * @param variableName - The name of the environment variable.
 * @returns The value of the environment variable, or undefined if not set.
 * @example
 * ```ts
 * getEnvVariable("NODE_ENV");
 * // Output: "development" (or whatever the value is)
 * ```
 * @example
 * ```ts
 * getEnvVariable("NON_EXISTENT_VAR");
 * // Output: undefined
 * ```
 */
export const getEnvVariable = (variableName: string): string | undefined => {
  if (!variableName || typeof variableName !== "string") {
    return undefined;
  }

  return process.env[variableName];
};
