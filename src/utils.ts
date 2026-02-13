export function greet(name: string): string {
  if (!name || name.trim() === '') {
    throw new Error('Name cannot be empty or whitespace');
  }
  return `Hello, ${name}!`;
}
