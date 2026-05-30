# Development Environment Guide

## Prerequisites

### Required Software
- **Node.js**: v18.x or v20.x (LTS recommended)
- **npm**: v9.x or higher
- **Git**: v2.40 or higher
- **Code Editor**: VS Code recommended (with extensions listed below)

### Recommended VS Code Extensions
- ESLint
- Prettier - Code formatter
- GitLens
- Jest Runner
- TypeScript Vue Plugin (Volar)
- EditorConfig for VS Code

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd chevza-enterprise
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
cp .env.example .env
```

Edit `.env` with your local configuration:
```
NODE_ENV=development
API_URL=http://localhost:3000
DATABASE_URL=postgresql://localhost:5432/chevza_dev
REDIS_URL=redis://localhost:6379
```

### 4. Set Up Local Database
```bash
# Install PostgreSQL (if not already installed)
# macOS: brew install postgresql
# Ubuntu: sudo apt-get install postgresql

# Create database
createdb chevza_dev

# Run migrations
npm run db:migrate

# Seed development data (optional)
npm run db:seed
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical production fixes

### Creating a Feature
```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Make changes, commit frequently
git add .
git commit -m "feat: add your feature description"

# Push and create pull request
git push origin feature/your-feature-name
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- path/to/test.spec.ts

# Run e2e tests
npm run test:e2e
```

### Code Quality Checks
```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type check
npm run type-check
```

### Building
```bash
# Development build
npm run build:dev

# Production build
npm run build

# Analyze bundle size
npm run build:analyze
```

## Project Structure
```
chevza-enterprise/
├── .github/           # GitHub workflows and templates
├── docs/              # Documentation
├── src/
│   ├── api/          # API routes and controllers
│   ├── components/   # Reusable UI components
│   ├── config/       # Configuration files
│   ├── lib/          # Utility libraries
│   ├── models/       # Data models
│   ├── services/     # Business logic
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Helper functions
├── tests/            # Test files
├── public/           # Static assets
└── scripts/          # Build and utility scripts
```

## Environment Setup

### Database
- **Development**: PostgreSQL local instance
- **Testing**: In-memory SQLite or test database
- **Staging**: Hosted PostgreSQL
- **Production**: Managed PostgreSQL with replication

### Cache
- **Development**: Redis local instance (optional)
- **Production**: Managed Redis cluster

## Debugging

### VS Code Debug Configuration
Add to `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Application",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "npm: build",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal"
    }
  ]
}
```

### Node.js Debugging
```bash
# Debug with inspector
node --inspect-brk dist/index.js

# Debug with VS Code
# Press F5 or use Debug panel
```

## Common Tasks

### Adding a New Dependency
```bash
# Production dependency
npm install <package-name>

# Development dependency
npm install -D <package-name>

# Update package-lock.json
npm install
```

### Database Migrations
```bash
# Create new migration
npm run migration:create -- --name=add-users-table

# Run migrations
npm run migration:run

# Revert migration
npm run migration:revert
```

### Code Generation
```bash
# Generate new API endpoint
npm run generate:api -- --name=users

# Generate new component
npm run generate:component -- --name=Button
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Node Modules Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Cache Issues
```bash
# Clear build cache
npm run clean
npm run build
```

## Performance Optimization

### Development
- Use `npm run dev` with hot reload
- Enable source maps for debugging
- Use incremental TypeScript compilation

### Production
- Enable minification and tree-shaking
- Use code splitting for large bundles
- Enable gzip/brotli compression
- Optimize images and assets

## Security Best Practices

1. Never commit secrets or API keys
2. Use environment variables for sensitive data
3. Keep dependencies up to date: `npm audit fix`
4. Review security advisories regularly
5. Use HTTPS in all environments
6. Implement proper authentication and authorization
7. Validate and sanitize all user input

## Getting Help

- Check existing documentation in `/docs`
- Review closed issues and PRs
- Ask in team chat or create an issue
- Consult the [CONTRIBUTING.md](CONTRIBUTING.md) guide

## Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
