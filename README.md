# Pokemon Explorer

A React application built with TypeScript, Redux Toolkit, and RTK Query that allows users to browse Pokemon and view their details. The application features persistent storage and comprehensive testing coverage.

## Features

- 📋 Browse a list of Pokemon from the PokeAPI
- 🔍 View detailed information about each Pokemon
- 💾 Persistent storage using localStorage
- 🔄 State management with Redux Toolkit
- 🌐 API integration with RTK Query
- ✅ Comprehensive unit and integration tests (60%+ coverage)
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **State Management**: Redux Toolkit, RTK Query
- **Styling**: Tailwind CSS, shadcn/ui components
- **Testing**: Jest, React Testing Library
- **API**: PokeAPI (https://pokeapi.co/)

## Prerequisites

- Node.js 18+
- npm or yarn package manager

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd pokemon-explorer
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create environment file:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Configure the API URL in \`.env.local\`:
   \`\`\`env
   NEXT_PUBLIC_POKEMON_API_URL=https://pokeapi.co/api/v2
   \`\`\`

## Running the Application

### Development Mode

\`\`\`bash
npm run dev
\`\`\`
The application will be available at http://localhost:3000

### Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

### Configurable API URLs

You can configure different API base URLs by setting the \`NEXT_PUBLIC_POKEMON_API_URL\` environment variable:

**For development:**
\`\`\`bash
NEXT_PUBLIC_POKEMON_API_URL=https://pokeapi.co/api/v2 npm run dev
\`\`\`

**For staging:**
\`\`\`bash
NEXT_PUBLIC_POKEMON_API_URL=https://pokeapi-staging.example.com/api/v2 npm run dev
\`\`\`

**For production:**
\`\`\`bash
NEXT_PUBLIC_POKEMON_API_URL=https://pokeapi-prod.example.com/api/v2 npm run build
\`\`\`

## Testing

### Run Tests

\`\`\`bash
npm test
\`\`\`

### Run Tests in Watch Mode

\`\`\`bash
npm run test:watch
\`\`\`

### Generate Coverage Report

\`\`\`bash
npm run test:coverage
\`\`\`

The application maintains **60%+ test coverage** across:

- Unit tests for components
- Integration tests for Redux slices
- API integration tests
- User interaction tests

## Project Structure

\`\`\`
pokemon-explorer/
├── app/ # Next.js app directory
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page
├── components/ # React components
│ ├── ui/ # shadcn/ui components
│ ├── pokemon-app.tsx # Main app component
│ ├── pokemon-list.tsx # Pokemon list component
│ └── pokemon-details.tsx # Pokemon details component
├── lib/ # Utilities and configuration
│ ├── api/ # RTK Query API definitions
│ ├── slices/ # Redux slices
│ ├── hooks.ts # Custom Redux hooks
│ ├── store.ts # Redux store configuration
│ └── utils.ts # Utility functions
├── types/ # TypeScript type definitions
│ └── pokemon.ts # Pokemon-related types
├── **tests**/ # Test files
│ ├── components/ # Component tests
│ └── lib/ # Library tests
├── .env.example # Environment variables template
├── jest.config.js # Jest configuration
├── jest.setup.js # Jest setup file
└── README.md # This file
\`\`\`

## Key Features Explained

### Persistent Storage

- Pokemon list is automatically saved to localStorage
- Data persists across browser sessions
- Automatic loading on application startup

### State Management

- Redux Toolkit for predictable state management
- RTK Query for efficient API data fetching and caching
- Optimistic updates and error handling

### Testing Strategy

- **Unit Tests**: Individual component functionality
- **Integration Tests**: Redux store and API interactions
- **User Interaction Tests**: Click events and user flows
- **Coverage**: Maintains 60%+ code coverage

### API Configuration

The application supports multiple API environments through environment variables:

- Development: Local or development API
- Staging: Staging environment API
- Production: Production API

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm test\` - Run tests once
- \`npm run test:watch\` - Run tests in watch mode
- \`npm run test:coverage\` - Generate coverage report
- \`npm run lint\` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/new-feature\`
3. Make your changes and add tests
4. Ensure tests pass: \`npm test\`
5. Commit your changes: \`git commit -m 'Add new feature'\`
6. Push to the branch: \`git push origin feature/new-feature\`
7. Submit a pull request

## License

This project is licensed under the MIT License.

## API Reference

This application uses the [PokeAPI](https://pokeapi.co/) for Pokemon data with the following specific endpoints:

### Endpoints Used:

- **GET** `https://pokeapi.co/api/v2/pokemon/` - Get Pokemon list
  - Query parameters: `?limit=20` to limit results
  - Returns: List of Pokemon with names and URLs
- **GET** `https://pokeapi.co/api/v2/pokemon/{id}/` - Get Pokemon details by ID
  - Example: `https://pokeapi.co/api/v2/pokemon/1/` (Bulbasaur)
  - Returns: Complete Pokemon data including stats, types, abilities, sprites

### API Configuration

The base URL can be configured via environment variable:
\`\`\`env
NEXT_PUBLIC_POKEMON_API_URL=https://pokeapi.co/api/v2
\`\`\`

### Data Flow:

1. App fetches Pokemon list from `/pokemon/` endpoint
2. User clicks on a Pokemon from the list
3. App extracts Pokemon ID from the URL in the list response
4. App fetches detailed Pokemon data using `/pokemon/{id}/` endpoint
5. Pokemon details are displayed to the user

The application fetches Pokemon data from the PokeAPI, stores it persistently, and provides a clean interface for browsing and viewing Pokemon details. All components are thoroughly tested and the codebase follows React and TypeScript best practices.
