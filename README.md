# Japanese Learning - Frontend

Frontend application for the Japanese Learning platform.

The application is built with Angular and provides the user interface for learning Japanese vocabulary through structured lessons and flashcards.

---

## 📌 Project Overview

Japanese Learning is a web-based application designed to support Japanese language learning.

The frontend is responsible for:

- Providing the main application layout.
- Displaying Japanese learning content.
- Organizing vocabulary into JLPT levels and lessons.
- Providing flashcard-based learning experiences.
- Managing navigation between learning features.
- Providing reusable UI components.

The frontend follows a feature-based architecture to keep the application modular and maintainable as new learning features are added.

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| Angular | 22.1.x |
| Angular CLI | 22.1.3 |
| TypeScript | 6.0.2 |
| Node.js | 24.x |
| npm | 11.12.1 |
| RxJS | 7.8.x |
| Tailwind CSS | 4.1.12 |
| PostCSS | 8.5.3 |
| Vitest | 4.0.8 |
| JSDOM | 28.0.0 |
| Prettier | 3.8.1 |

---

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   │
│   └── app/
│       ├── app.config.ts
│       ├── app.css
│       ├── app.html
│       ├── app.routes.ts
│       ├── app.spec.ts
│       ├── app.ts
│       │
│       ├── core/
│       │   └── layout/
│       │       ├── header/
│       │       │   ├── header.css
│       │       │   ├── header.html
│       │       │   ├── header.spec.ts
│       │       │   └── header.ts
│       │       │
│       │       ├── sidebar/
│       │       │   ├── sidebar.css
│       │       │   ├── sidebar.html
│       │       │   ├── sidebar.spec.ts
│       │       │   └── sidebar.ts
│       │       │
│       │       ├── footer/
│       │       │   ├── footer.css
│       │       │   ├── footer.html
│       │       │   ├── footer.spec.ts
│       │       │   └── footer.ts
│       │       │
│       │       └── main-layout/
│       │           ├── main-layout.css
│       │           ├── main-layout.html
│       │           ├── main-layout.spec.ts
│       │           └── main-layout.ts
│       │
│       └── features/
│           ├── home/
│           │   ├── home.css
│           │   ├── home.html
│           │   ├── home.spec.ts
│           │   └── home.ts
│           │
│           └── flashcard/
│               ├── flashcard.routes.ts
│               │
│               ├── components/
│               │   ├── flashcard/
│               │   │   ├── flashcard.css
│               │   │   ├── flashcard.html
│               │   │   └── flashcard.ts
│               │   │
│               │   ├── lesson-card/
│               │   │   ├── lesson-card.css
│               │   │   ├── lesson-card.html
│               │   │   └── lesson-card.ts
│               │   │
│               │   └── level-card/
│               │       ├── level-card.css
│               │       ├── level-card.html
│               │       └── level-card.ts
│               │
│               ├── models/
│               │   ├── flashcard-lesson.model.ts
│               │   ├── flashcard-level.model.ts
│               │   └── flashcard.model.ts
│               │
│               ├── pages/
│               │   ├── lesson-list/
│               │   │   ├── lesson-list.css
│               │   │   ├── lesson-list.html
│               │   │   └── lesson-list.ts
│               │   │
│               │   ├── level-list/
│               │   │   ├── level-list.css
│               │   │   ├── level-list.html
│               │   │   └── level-list.ts
│               │   │
│               │   └── study/
│               │       ├── study.css
│               │       ├── study.html
│               │       └── study.ts
│               │
│               └── services/
│                   └── flashcard.service.ts
│
├── package.json
├── package-lock.json
└── ...
```

---

## 🏗️ Architecture

The frontend follows a **feature-based architecture**.

The application is mainly divided into:

- `core`
- `features`

### Core

The `core` directory contains application-wide components and infrastructure.

```text
src/app/core/
└── layout/
    ├── header/
    ├── sidebar/
    ├── footer/
    └── main-layout/
```

These components are shared across the application and are responsible for the overall application layout.

#### Header

Provides the top navigation area of the application.

#### Sidebar

Provides the main navigation menu.

#### Footer

Provides the application footer.

#### Main Layout

Combines the main application layout components such as:

- Header
- Sidebar
- Main content
- Footer

Application-wide layout components should remain inside `core`.

---

### Features

The `features` directory contains functionality organized by business feature.

```text
src/app/features/
├── home/
└── flashcard/
```

Each feature owns its related:

- Pages
- Components
- Models
- Services
- Routes

This keeps feature-specific logic isolated and makes the application easier to extend.

---

## 🏠 Home Feature

The `home` feature provides the application's home page.

```text
features/home/
├── home.css
├── home.html
├── home.spec.ts
└── home.ts
```

The home page acts as the main entry point for the application.

---

## 🃏 Flashcard Feature

The `flashcard` feature is the main learning functionality currently implemented in the frontend.

```text
features/flashcard/
├── components/
├── models/
├── pages/
├── services/
└── flashcard.routes.ts
```

The feature is organized into separate layers for UI components, pages, data models, services, and routing.

### Components

Reusable UI components used by the flashcard feature.

#### Flashcard

```text
components/flashcard/
```

Responsible for displaying and handling the flashcard learning UI.

#### Lesson Card

```text
components/lesson-card/
```

Displays lesson information in a reusable card component.

#### Level Card

```text
components/level-card/
```

Displays JLPT level information in a reusable card component.

---

### Pages

The flashcard feature currently contains the following pages:

```text
pages/
├── level-list/
├── lesson-list/
└── study/
```

#### Level List

Displays available learning levels.

```text
pages/level-list/
```

#### Lesson List

Displays lessons belonging to a selected level.

```text
pages/lesson-list/
```

#### Study

Provides the flashcard study interface.

```text
pages/study/
```

---

### Models

Flashcard-related TypeScript models are stored under:

```text
features/flashcard/models/
```

Current models include:

- `flashcard.model.ts`
- `flashcard-lesson.model.ts`
- `flashcard-level.model.ts`

Models are used to define the structure of data handled by the flashcard feature.

---

### Services

Flashcard-related service logic is stored under:

```text
features/flashcard/services/
```

Current service:

```text
flashcard.service.ts
```

The service is responsible for managing flashcard-related data access and business operations.

---

## 🧭 Routing

The main application routes are defined in:

```text
src/app/app.routes.ts
```

Feature-specific routes are defined inside their corresponding feature.

For example:

```text
src/app/features/flashcard/flashcard.routes.ts
```

This approach keeps the main routing configuration clean and allows each feature to manage its own navigation.

---

## 🎨 Styling

The project uses:

- Tailwind CSS
- Component-level CSS
- Global CSS

Global styles are located in:

```text
src/styles.css
```

Each component keeps its own styles next to its TypeScript and HTML files.

For example:

```text
header/
├── header.ts
├── header.html
└── header.css
```

This keeps component-specific styling isolated and easier to maintain.

---

## 📦 Prerequisites

Before running the project, make sure the following tools are installed:

- Node.js 24.x
- npm 11.x

Verify the installed versions:

```bash
node --version
npm --version
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the frontend directory:

```bash
cd frontend
```

Install project dependencies:

```bash
npm install
```

---

## ▶️ Run Development Server

Start the Angular development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:4200
```

The development server automatically reloads when source files are modified.

---

## 🔨 Build

Create a production build:

```bash
npm run build
```

The generated build files are placed in the Angular build output directory.

---

## 👀 Development Build

To automatically rebuild the application when source files are changed:

```bash
npm run watch
```

This runs:

```bash
ng build --watch --configuration development
```

---

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

The project uses:

- Vitest
- JSDOM

Unit test files follow the Angular convention:

```text
*.spec.ts
```

Current test files include:

```text
src/app/app.spec.ts

src/app/core/layout/header/header.spec.ts
src/app/core/layout/sidebar/sidebar.spec.ts
src/app/core/layout/footer/footer.spec.ts
src/app/core/layout/main-layout/main-layout.spec.ts

src/app/features/home/home.spec.ts
```

---

## 🧹 Code Formatting

The project uses **Prettier** for code formatting.

Run Prettier according to the project's formatting configuration when making changes.

Keeping consistent formatting helps maintain code readability across the project.

---

## 🌿 Git Branching Strategy

The project uses the following branch structure:

```text
main
  │
  └── develop
        │
        ├── feature/angular-base
        ├── feature/app-layout
        ├── feature/flashcard-base
        └── feature/<new-feature>
```

### `main`

The stable branch intended for release-ready code.

### `develop`

The main development branch.

New features are merged into `develop` after implementation and review.

### Feature Branches

New features should be developed in dedicated feature branches.

Naming convention:

```text
feature/<feature-name>
```

Examples:

```text
feature/app-layout
feature/flashcard-base
feature/vocabulary
```

---

## 🔄 Development Workflow

Recommended development workflow:

```text
1. Switch to develop
       ↓
2. Pull latest changes
       ↓
3. Create feature branch
       ↓
4. Implement feature
       ↓
5. Run tests
       ↓
6. Run production build
       ↓
7. Commit changes
       ↓
8. Push feature branch
       ↓
9. Create Pull Request
       ↓
10. Merge into develop
```

Start from the latest `develop`:

```bash
git switch develop
git pull
```

Create a new feature branch:

```bash
git switch -c feature/<feature-name>
```

Before creating a Pull Request:

```bash
npm test
npm run build
```

Commit the changes:

```bash
git add .
git commit -m "feat: add <feature-name>"
```

Push the feature branch:

```bash
git push -u origin feature/<feature-name>
```

Create the Pull Request using:

```text
base: develop
compare: feature/<feature-name>
```

---

## 📝 Commit Convention

The project follows a Conventional Commits style.

| Prefix | Usage |
|--------|-------|
| `feat` | Add a new feature |
| `fix` | Fix a bug |
| `refactor` | Refactor existing code |
| `style` | UI or styling changes |
| `test` | Add or update tests |
| `docs` | Documentation changes |
| `chore` | Maintenance or configuration changes |

Examples:

```bash
git commit -m "feat: add flashcard study page"
```

```bash
git commit -m "fix: correct flashcard navigation"
```

```bash
git commit -m "refactor: improve flashcard service"
```

```bash
git commit -m "docs: update frontend README"
```

---

## 📐 Development Guidelines

### Feature Organization

Feature-specific code should remain inside its corresponding feature directory.

For example:

```text
features/flashcard/
```

should contain flashcard-related:

- Components
- Pages
- Models
- Services
- Routes

Avoid placing feature-specific logic inside `core`.

---

### Shared Components

Application-wide components should be placed under:

```text
core/
```

Examples:

```text
core/layout/header/
core/layout/sidebar/
core/layout/footer/
core/layout/main-layout/
```

These components can be reused by multiple features.

---

### Component Structure

Each component should keep its related files together.

Recommended structure:

```text
component-name/
├── component-name.ts
├── component-name.html
├── component-name.css
└── component-name.spec.ts
```

This makes components easier to understand, test, and maintain.

---

### Models

Models should be placed inside the feature that owns them.

For example:

```text
features/flashcard/models/
```

Feature-specific models should not be placed in `core` unless they are genuinely shared across the application.

---

### Services

Services should be placed inside the feature they belong to.

For example:

```text
features/flashcard/services/
└── flashcard.service.ts
```

This keeps business logic close to the feature that uses it.

---

## 📌 Current Development Status

The frontend is currently under active development.

### Implemented

- Angular application foundation
- Main application layout
- Header
- Sidebar
- Footer
- Main layout
- Home page
- Flashcard feature foundation
- JLPT level listing
- Lesson listing
- Flashcard study page foundation
- Flashcard models
- Flashcard service
- Feature-level routing
- Unit test setup
- Tailwind CSS integration

### Planned

Future features may include:

- Japanese vocabulary management
- JLPT vocabulary learning
- Flashcard progress tracking
- User authentication
- User learning progress
- Backend API integration
- Additional Japanese learning modules

---

## 🔗 Project Architecture

The Japanese Learning system consists of frontend and backend applications.

```text
Japanese Learning
│
├── Frontend
│   └── Angular
│
└── Backend
    └── Quarkus
```

The Angular frontend is responsible for the user interface and learning experience, while the backend provides APIs and data services.

---

## 👨‍💻 Development

This project is currently under active development.

All new features should follow the project's:

- Feature-based architecture
- Git branching strategy
- Commit convention
- Component organization
- Testing practices

Before submitting a Pull Request, make sure the project builds successfully and the test suite passes.

```bash
npm test
npm run build
```