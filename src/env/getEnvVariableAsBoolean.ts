import { getEnvVariable } from "./getEnvVariable";

/**
 * Gets an environment variable value as a boolean.
 * @param variableName - The name of the environment variable.
 * @returns The value as a boolean, or undefined if not set.
 * Truthy values: "true", "1", "yes"
 * Falsy values: "false", "0", "no", ""
 * @example
 * ```ts
 * getEnvVariableAsBoolean("DEBUG");
 * // Output: true (if DEBUG=true)
 * ```
 * @example
 * ```ts
 * getEnvVariableAsBoolean("ENABLED");
 * // Output: false (if ENABLED=false)
 * ```
 */
export const getEnvVariableAsBoolean = (variableName: string): boolean | undefined => {
  const value = getEnvVariable(variableName);

  if (value === undefined) {
    return undefined;
  }

  const lowerValue = value.toLowerCase();

  if (lowerValue === "true" || lowerValue === "1" || lowerValue === "yes") {
    return true;
  }

  if (lowerValue === "false" || lowerValue === "0" || lowerValue === "no" || value === "") {
    return false;
  }

  return undefined;
};
