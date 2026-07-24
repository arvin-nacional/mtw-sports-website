# Testing Guide - MTW Sports

This project follows **Test-Driven Development (TDD)** practices with a comprehensive testing stack.

## Testing Stack

| Type | Tool | Location |
|------|------|----------|
| Unit/Integration | Vitest + React Testing Library | `tests/int/` |
| E2E | Playwright | `tests/e2e/` |

## Quick Commands

```bash
# Run all tests
pnpm test

# Run unit/integration tests
pnpm test:int

# Run tests in watch mode (TDD)
pnpm test:watch

# Run with coverage report
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run E2E with visual UI
pnpm test:e2e:ui
```

## TDD Workflow

### 1. Red-Green-Refactor Cycle

1. **Red**: Write a failing test first
2. **Green**: Write minimum code to pass
3. **Refactor**: Clean up while keeping tests green

### 2. Example: Adding a New Block

```typescript
// 1. Write the test first (tests/int/blocks.int.spec.ts)
describe('NewBlock', () => {
  it('renders correctly with required props', () => {
    render(<NewBlock heading="Test" />)
    expect(screen.getByText('Test')).toBeDefined()
  })
})

// 2. Run test - it fails (RED)
// pnpm test:watch

// 3. Create the component to pass (GREEN)
// 4. Refactor if needed
```

## Test Structure

```
tests/
├── e2e/                    # End-to-end tests (Playwright)
│   ├── admin.e2e.spec.ts   # Admin panel tests
│   └── frontend.e2e.spec.ts # Frontend tests
├── int/                    # Integration tests (Vitest)
│   ├── api.int.spec.ts     # Payload API tests
│   └── components.int.spec.ts # Component tests
└── helpers/                # Test utilities
    ├── login.ts            # Auth helpers
    └── seedUser.ts         # Test data seeding
```

## Writing Tests

### Unit Tests (Components)

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('MyComponent', () => {
  it('renders children', () => {
    render(<MyComponent>Hello</MyComponent>)
    expect(screen.getByText('Hello')).toBeDefined()
  })
})
```

### Integration Tests (Payload API)

```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'
import { describe, it, beforeAll, expect } from 'vitest'

describe('Collection', () => {
  let payload

  beforeAll(async () => {
    payload = await getPayload({ config: await config })
  })

  it('creates a document', async () => {
    const doc = await payload.create({
      collection: 'pages',
      data: { title: 'Test' },
    })
    expect(doc.title).toBe('Test')
  })
})
```

### E2E Tests (Playwright)

```typescript
import { test, expect } from '@playwright/test'

test('user flow', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.click('a:has-text("About")')
  await expect(page).toHaveURL(/about/)
})
```

## Best Practices

### 1. Test Naming
- Use descriptive names: `it('displays error when form is invalid')`
- Follow "should/when" pattern: `it('should redirect when not authenticated')`

### 2. Arrange-Act-Assert (AAA)
```typescript
it('increments counter', () => {
  // Arrange
  render(<Counter initialValue={0} />)
  
  // Act
  fireEvent.click(screen.getByText('Increment'))
  
  // Assert
  expect(screen.getByText('1')).toBeDefined()
})
```

### 3. Test Coverage Goals
- **Unit tests**: 80%+ for business logic
- **Integration tests**: All API endpoints
- **E2E tests**: Critical user flows

### 4. What to Test

| ✅ Test | ❌ Don't Test |
|---------|---------------|
| Business logic | Framework internals |
| User interactions | Implementation details |
| Edge cases | Third-party libraries |
| Error handling | CSS styling |
| API responses | Constants/config |

## CI/CD Integration

Tests run automatically on:
- Pull requests
- Pushes to `main`

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - run: pnpm install
      - run: pnpm test:int
      - run: pnpm test:e2e
```

## Debugging Tests

### Vitest
```bash
# Run specific test file
pnpm test:int -- tests/int/api.int.spec.ts

# Run tests matching pattern
pnpm test:int -- -t "fetches users"
```

### Playwright
```bash
# Debug mode
pnpm test:e2e -- --debug

# Specific test
pnpm test:e2e -- frontend.e2e.spec.ts

# Generate test code
npx playwright codegen localhost:3000
```
