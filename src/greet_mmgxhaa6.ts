/**
 * Returns a greeting for the given name.
 * @param name - The name to greet
 * @returns A greeting string in the format "Hello, {name}!"
 * @throws {Error} If name is empty or whitespace-only
 */
export function greet_mmgxhaa6(name: string): string {
  if (name.trim() === '') {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${name}!`;
}
