# Japanese Learning - Frontend

Frontend application for the Japanese Learning platform, built with Angular.

## 🛠️ Tech Stack

- Angular 22.1.x
- TypeScript 6.0.2
- Node.js 24.x
- npm 11.x
- RxJS 7.8.x
- Tailwind CSS 4.1.12
- Vitest 4.0.8

## 📁 Project Structure

```text
src/
└── app/
    ├── core/
    │   └── layout/
    │       ├── header/
    │       ├── sidebar/
    │       ├── footer/
    │       └── main-layout/
    │
    └── features/
        ├── home/
        │
        └── flashcard/
            ├── components/
            │   ├── flashcard/
            │   ├── lesson-card/
            │   └── level-card/
            ├── models/
            ├── pages/
            │   ├── level-list/
            │   ├── lesson-list/
            │   └── study/
            ├── services/
            └── flashcard.routes.ts
```

## 🏗️ Architecture

The project follows a **feature-based architecture**.

- `core/` — application-wide components such as layout and navigation.
- `features/` — business features with their own pages, components, models, services, and routes.

This structure keeps features isolated and makes the application easier to maintain and extend.

## 🃏 Flashcard Feature

The flashcard feature currently includes:

- JLPT level listing
- Lesson listing
- Flashcard study page
- Flashcard models
- Flashcard service
- Feature-level routing

## 🚀 Getting Started

### Prerequisites

- Node.js 24.x
- npm 11.x

Check installed versions:

```bash
node --version
npm --version
```

### Installation

```bash
git clone <repository-url>
cd frontend
npm install
```

### Run Development Server

```bash
npm start
```

Application:

```text
http://localhost:4200
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Watch Build

```bash
npm run watch
```

## 🌿 Git Workflow

```text
main
└── develop
    ├── feature/angular-base
    ├── feature/app-layout
    ├── feature/flashcard-base
    └── feature/<feature-name>
```

Create a feature branch:

```bash
git switch develop
git pull
git switch -c feature/<feature-name>
```

Before creating a Pull Request:

```bash
npm test
npm run build
```

Push the branch:

```bash
git add .
git commit -m "feat: add <feature-name>"
git push -u origin feature/<feature-name>
```

Pull Request:

```text
base: develop
compare: feature/<feature-name>
```

## 📝 Commit Convention

| Prefix | Usage |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Refactoring |
| `style` | UI/styling |
| `test` | Tests |
| `docs` | Documentation |
| `chore` | Maintenance |

Example:

```bash
git commit -m "feat: add flashcard study page"
```

## 📌 Development Status

### Implemented

- Angular application foundation
- Main application layout
- Home page
- Flashcard feature foundation
- JLPT level and lesson listing
- Flashcard study page
- Models and services
- Feature-level routing
- Unit testing
- Tailwind CSS integration

### Planned

- Vocabulary management
- JLPT vocabulary learning
- Learning progress tracking
- User authentication
- Backend API integration
- Additional Japanese learning modules

## 🔗 System Architecture

```text
Japanese Learning
│
├── Frontend
│   └── Angular
│
└── Backend
    └── Quarkus
    └── .NET
```

The frontend provides the user interface and learning experience, while the backend provides APIs and data services.