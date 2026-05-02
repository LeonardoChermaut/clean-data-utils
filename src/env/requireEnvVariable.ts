import { getEnvVariable } from "./getEnvVariable";

/**
 * Gets a required environment variable, throwing an error if not set.
 * @param variableName - The name of the environment variable.
 * @returns The value of the environment variable.
 * @throws Error if the environment variable is not set.
 * @example
 * ```ts
 * const apiKey = requireEnvVariable("API_KEY");
 * // Returns the API_KEY value or throws if not set
 * ```
 */
export const requireEnvVariable = (variableName: string): string => {
  const value = getEnvVariable(variableName);

  if (value === undefined) {
    throw new Error(`Environment variable ${variableName} is not set`);
  }

  return value;
};
