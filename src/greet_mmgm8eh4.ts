export function greet_mmgm8eh4(name: string | null | undefined): string {
  if (name == null) {
    throw new Error('Name cannot be null or undefined');
  }
  return `Hello, ${name}!`;
}
