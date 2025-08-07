# Pokemon Explorer

A React application built with TypeScript, Redux Toolkit, and RTK Query that allows users to browse Pokemon and view their details. The application features persistent storage and comprehensive testing coverage.

## Features

- 📋 Browse a list of Pokemon from the PokeAPI
- 🔍 View detailed information about each Pokemon
- 💾 Persistent storage using redux-persist
- 🔄 State management with Redux Toolkit
- 🌐 API integration with RTK Query
- ✅ Comprehensive unit and integration tests (60%+ coverage)
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **State Management**: Redux Toolkit, RTK Query
- **Styling**: Tailwind CSS
- **Testing**: Vitest, React Testing Library
- **API**: PokeAPI (https://pokeapi.co/)

## Prerequisites

- Node.js 18+
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/midaniahmed/pokemon-app.git
   cd pokemon-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure the API URL in \`.env\`:
   ```env
   VITE_BASE_API_URL=https://pokeapi.co/api/v2
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```
The application will be available at http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## Testing

### Run Tests

```bash
npm test
```


### Generate Coverage Report

```bash
npm run coverage
```

The application maintains **60%+ test coverage** across:

- Unit tests for components
- Integration tests for Redux slices
- API integration tests
- User interaction tests

## Project Structure

```
project-root/
├── public/
├── src/
│   ├── __tests__/
│   ├── assets/
│   ├── core/
│   │   ├── constants/
│   │   ├── hooks/
│   │   ├── models/
│   │   ├── services/
│   │   └── utils/
│   ├── modules/
│   │   ├── layout/
│   │   ├── pokemon-details/
│   │   ├── pokemon-list/
│   │   └── shared/
│   ├── store/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

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


### Data Flow:

1. App fetches Pokemon list from `/pokemon/` endpoint
2. User clicks on a Pokemon from the list
3. App extracts Pokemon ID from the URL in the list response
4. App fetches detailed Pokemon data using `/pokemon/{id}/` endpoint
5. Pokemon details are displayed to the user

The application fetches Pokemon data from the PokeAPI, stores it persistently, and provides a clean interface for browsing and viewing Pokemon details. All components are thoroughly tested and the codebase follows React and TypeScript best practices.
