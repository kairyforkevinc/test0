/**
 * Greeting utility module.
 * @module greet_i231
 */

/**
 * Returns a greeting message for the given name.
 * @param name - The name to greet
 * @returns A greeting string in the format "Hello, {name}!"
 */
export function greet_i231(name: string): string {
  if (!name.trim()) {
    throw new Error('Name must not be empty');
  }
  return `Hello, ${name}!`;
}
