/**
 * Returns a greeting for the given name.
 * @param name - The name to greet (must not be empty or whitespace-only)
 * @returns A greeting string in the format "Hello, {name}!"
 * @throws {Error} If name is empty or whitespace-only
 */
export function greet_mm6crhi1(name: string): string {
  if (!name.trim()) {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${name}!`;
}
