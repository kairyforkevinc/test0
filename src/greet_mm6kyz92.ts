/**
 * Returns a greeting for the given name.
 * @param name - The name to greet
 * @returns A greeting string in the format "Hello, {name}!"
 * @throws {Error} If name is null, undefined, or empty/whitespace-only
 */
export function greet_mm6kyz92(name: string): string {
  if (!name || !name.trim()) {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${name}!`;
}
