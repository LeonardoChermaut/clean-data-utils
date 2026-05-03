/**
 * Validates a credit card number using the Luhn algorithm.
 * Universal - works for Visa, Mastercard, Amex, etc.
 * @param value - The credit card number (digits only).
 * @returns True if valid, false otherwise.
 * @example
 * ```ts
 * const result = isValidCreditCard("4532015112830366");
 * console.log(result);
 * // Output: true
 * ```
 * @example
 * ```ts
 * const result = isValidCreditCard("1234567890123456");
 * console.log(result);
 * // Output: false
 * ```
 */
export const isValidCreditCard = (value: string): boolean => {
  const digits = value.replace(/\D/g, "");

  if (digits.length < 13 || digits.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let index = digits.length - 1; index >= 0; index--) {
    const digitChar = digits[index];

    if (digitChar === undefined) {
      return false;
    }

    let digit = Number.parseInt(digitChar, 10);

    if (isEven) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};
