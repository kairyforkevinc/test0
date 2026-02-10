const { greet } = require('./greet');

function runTests() {
  let passed = 0;
  let failed = 0;

  // Test 1: Basic greeting
  const result1 = greet('World');
  if (result1 === 'Hello, World!') {
    console.log('✓ Test 1 passed: greet("World") returns "Hello, World!"');
    passed++;
  } else {
    console.log(`✗ Test 1 failed: expected "Hello, World!", got "${result1}"`);
    failed++;
  }

  // Test 2: Greeting with different name
  const result2 = greet('Alice');
  if (result2 === 'Hello, Alice!') {
    console.log('✓ Test 2 passed: greet("Alice") returns "Hello, Alice!"');
    passed++;
  } else {
    console.log(`✗ Test 2 failed: expected "Hello, Alice!", got "${result2}"`);
    failed++;
  }

  // Test 3: Greeting with empty string
  const result3 = greet('');
  if (result3 === 'Hello, !') {
    console.log('✓ Test 3 passed: greet("") returns "Hello, !"');
    passed++;
  } else {
    console.log(`✗ Test 3 failed: expected "Hello, !", got "${result3}"`);
    failed++;
  }

  // Summary
  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
