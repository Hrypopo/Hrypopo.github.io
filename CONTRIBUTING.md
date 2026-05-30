# Contributing Guide

## Code Standards

### General Principles
1. **Write clear, readable code** - Code is read more often than written
2. **Keep it simple** - Avoid unnecessary complexity
3. **Be consistent** - Follow existing patterns in the codebase
4. **Test your code** - All features should have appropriate tests
5. **Document when needed** - Complex logic should be explained

### TypeScript/JavaScript Standards

#### Naming Conventions
- **Variables & Functions**: `camelCase`
- **Classes & Interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Private members**: prefix with `_` (e.g., `_privateMethod`)
- **File names**: `kebab-case.ts` or `PascalCase.tsx` for components

```typescript
// Good
const userCount = 10;
class UserService {}
const API_BASE_URL = 'https://api.chevza.com';

// Bad
const UserCount = 10;
class userService {}
const api_base_url = 'https://api.chevza.com';
```

#### Code Organization
```typescript
// 1. Imports (external first, then internal)
import { Router } from 'express';
import { validateUser } from './validators';

// 2. Types and interfaces
interface UserData {
  id: string;
  name: string;
}

// 3. Constants
const MAX_RETRIES = 3;

// 4. Main implementation
export class UserService {
  // Public methods first
  public async createUser(data: UserData): Promise<User> {
    // Implementation
  }

  // Private methods last
  private _validateData(data: UserData): boolean {
    // Implementation
  }
}
```

#### Function Guidelines
```typescript
// Keep functions small and focused
// Good - single responsibility
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Bad - doing too much
function processUser(data: any): any {
  // Validation, transformation, database save, email sending...
}

// Use descriptive names
// Good
function calculateTotalPrice(items: CartItem[]): number {}

// Bad
function calc(x: any[]): number {}

// Prefer pure functions when possible
// Good
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Avoid side effects
// Bad
let total = 0;
function addToTotal(n: number): void {
  total += n; // Side effect
}
```

#### Error Handling
```typescript
// Use custom error classes
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Handle errors appropriately
try {
  await riskyOperation();
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle validation errors
  } else {
    // Handle unexpected errors
    logger.error('Unexpected error', error);
    throw error;
  }
}

// Return Result types for expected failures
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

async function getUserById(id: string): Promise<Result<User>> {
  // Implementation
}
```

#### Async/Await
```typescript
// Prefer async/await over promises
// Good
async function fetchUserData(userId: string): Promise<User> {
  const response = await api.get(`/users/${userId}`);
  return response.data;
}

// Bad
function fetchUserData(userId: string): Promise<User> {
  return api.get(`/users/${userId}`)
    .then(response => response.data);
}

// Handle concurrent operations efficiently
// Good
const [users, posts, comments] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
  fetchComments()
]);

// Bad - sequential when parallel is possible
const users = await fetchUsers();
const posts = await fetchPosts();
const comments = await fetchComments();
```

### Testing Standards

#### Test Structure
```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      // Arrange
      const userData = { name: 'John Doe', email: 'john@example.com' };

      // Act
      const user = await userService.createUser(userData);

      // Assert
      expect(user).toBeDefined();
      expect(user.name).toBe('John Doe');
      expect(user.email).toBe('john@example.com');
    });

    it('should throw ValidationError for invalid email', async () => {
      // Arrange
      const userData = { name: 'John Doe', email: 'invalid-email' };

      // Act & Assert
      await expect(userService.createUser(userData))
        .rejects
        .toThrow(ValidationError);
    });
  });
});
```

#### Test Coverage Requirements
- **Unit tests**: Minimum 80% coverage for services and utilities
- **Integration tests**: All API endpoints
- **E2E tests**: Critical user flows
- **Edge cases**: Test error conditions and boundary values

#### Test Best Practices
1. Tests should be independent and isolated
2. Use descriptive test names
3. Mock external dependencies
4. Test behavior, not implementation
5. Keep tests simple and focused

### Git Commit Standards

#### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, tooling

#### Examples
```
feat(auth): add JWT token refresh mechanism

Implement automatic token refresh to improve user experience
and reduce the frequency of re-authentication.

Closes #123
```

```
fix(api): resolve race condition in user creation

The user creation endpoint had a race condition that could
result in duplicate users. Added transaction locking to
prevent this issue.

Fixes #456
```

```
docs(readme): update installation instructions

Added missing step for database setup and clarified
environment variable configuration.
```

### Code Review Process

#### Before Submitting a PR
1. **Self-review** your changes
2. **Run all tests** and ensure they pass
3. **Run linting** and fix all issues
4. **Update documentation** if needed
5. **Write clear PR description** explaining what and why

#### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass locally
```

#### Review Guidelines

**For Authors:**
- Keep PRs small and focused (< 400 lines preferred)
- Respond promptly to feedback
- Be open to suggestions
- Explain your reasoning when disagreeing

**For Reviewers:**
- Review within 24 hours
- Be constructive and respectful
- Focus on important issues
- Ask questions when unclear
- Approve once satisfied

#### Review Checklist
- [ ] Code is clear and maintainable
- [ ] Logic is sound and efficient
- [ ] Error handling is appropriate
- [ ] Tests are comprehensive
- [ ] No security vulnerabilities
- [ ] Performance considerations addressed
- [ ] Documentation is adequate
- [ ] Follows code standards

### Pull Request Workflow

1. **Create feature branch** from `develop`
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/new-feature
   ```

2. **Make changes** and commit regularly
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Keep branch updated** with develop
   ```bash
   git fetch origin
   git rebase origin/develop
   ```

4. **Push branch** and create PR
   ```bash
   git push origin feature/new-feature
   ```

5. **Address review feedback**
   - Make requested changes
   - Push additional commits
   - Reply to comments

6. **Merge after approval**
   - Squash commits if needed
   - Use "Squash and merge" for features
   - Use "Merge commit" for releases

### Code Quality Tools

#### ESLint Configuration
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

#### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

## Documentation Standards

### Code Comments
```typescript
// Use JSDoc for public APIs
/**
 * Calculates the total price including tax
 * @param items - Array of cart items
 * @param taxRate - Tax rate as decimal (e.g., 0.08 for 8%)
 * @returns Total price with tax applied
 * @throws {ValidationError} If items array is empty
 */
function calculateTotal(items: CartItem[], taxRate: number): number {
  // Implementation
}

// Use inline comments sparingly for complex logic
function complexAlgorithm(data: Data[]): Result {
  // Sort by priority to ensure high-priority items are processed first
  const sorted = data.sort((a, b) => b.priority - a.priority);

  // Process in batches to avoid memory issues with large datasets
  const batches = chunk(sorted, BATCH_SIZE);

  return processBatches(batches);
}
```

### README Files
- Every module should have a README explaining its purpose
- Include usage examples
- Document configuration options
- List dependencies and requirements

## Security Guidelines

1. **Never commit secrets** - Use environment variables
2. **Validate all input** - Especially user-provided data
3. **Sanitize output** - Prevent XSS attacks
4. **Use parameterized queries** - Prevent SQL injection
5. **Implement proper authentication** - Use established patterns
6. **Keep dependencies updated** - Run `npm audit` regularly
7. **Use HTTPS everywhere** - No plain HTTP in production
8. **Implement rate limiting** - Prevent abuse
9. **Log security events** - Monitor for suspicious activity
10. **Follow principle of least privilege** - Minimal necessary permissions

## Performance Guidelines

1. **Profile before optimizing** - Measure, don't guess
2. **Optimize database queries** - Use indexes, avoid N+1 queries
3. **Cache appropriately** - Use Redis for frequently accessed data
4. **Lazy load when possible** - Don't load what you don't need
5. **Use pagination** - For large datasets
6. **Optimize bundle size** - Code split, tree shake
7. **Use CDN for static assets** - Improve load times
8. **Monitor performance** - Track key metrics

## Questions?

If you have questions about these standards or the review process:
- Check existing documentation
- Ask in team chat
- Create a discussion issue
- Reach out to the CTO

Thank you for contributing to Chevza Enterprise!
