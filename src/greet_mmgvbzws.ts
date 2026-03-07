/**
 * Returns a greeting for the given name.
 * @param name - The name to greet
 * @returns A greeting string in the format "Hello, {name}!"
 * @throws {Error} If name is null, undefined, empty, or whitespace-only
 */
export function greet_mmgvbzws(name: string | null | undefined): string {
  if (name == null || name.trim() === '') {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${name}!`;
}
