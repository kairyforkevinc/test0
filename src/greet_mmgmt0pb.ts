export function greet_mmgmt0pb(name: string | null | undefined): string {
  if (name == null) {
    throw new Error('Name cannot be null or undefined');
  }
  return `Hello, ${name}!`;
}
