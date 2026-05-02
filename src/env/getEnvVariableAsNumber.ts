import { getEnvVariable } from "./getEnvVariable";

/**
 * Gets an environment variable value as a number.
 * @param variableName - The name of the environment variable.
 * @returns The value as a number, or undefined if not set or not a valid number.
 * @example
 * ```ts
 * getEnvVariableAsNumber("PORT");
 * // Output: 3000 (if PORT=3000)
 * ```
 * @example
 * ```ts
 * getEnvVariableAsNumber("NOT_A_NUMBER");
 * // Output: undefined
 * ```
 */
export const getEnvVariableAsNumber = (variableName: string): number | undefined => {
  const value = getEnvVariable(variableName);

  if (value === undefined) {
    return undefined;
  }

  const parsedNumber = Number(value);

  if (Number.isNaN(parsedNumber)) {
    return undefined;
  }

  return parsedNumber;
};
