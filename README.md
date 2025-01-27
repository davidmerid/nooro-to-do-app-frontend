# Documentation for Todo Frontend Application

## Overview

## This application is a **Todo Management System** built with **Next.js**, using modern frontend technologies such as **React Query**, **React Hook Form**, **Radix UI**, and **TailwindCSS**.

## Project Structure

```plaintext
root/
├── package.json
├── tailwind.config.ts
├── .env.local
├── .env.local.example
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── global.css
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   ├── tasks/
│   │   │   ├── task-form/
│   │   │   │   ├── Color-picker.tsx
│   │   │   │   └── Index.tsx
│   │   │   ├── task-list/
│   │   │   │   ├── Task-card.tsx
│   │   │   │   ├── Task-counter.tsx
│   │   │   │   ├── Task-empty.tsx
│   │   │   │   └── Index.tsx
│   │   ├── ui/
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   └── input.tsx
│   ├── hooks/
│   │   ├── use-create-task.ts
│   │   └── use-tasks.ts
│   ├── lib/
│   │   ├── baseAPI.ts
│   │   ├── query-provider.tsx
│   │   ├── tasksAPI.ts
│   │   └── utils.ts
│   ├── types/
│       └── index.ts
```

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 15.1.6
- **Styling**: [TailwindCSS](https://tailwindcss.com/), TailwindCSS Animate
- **State Management**: [React Query](https://tanstack.com/query) with DevTools
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: clsx, tailwind-merge

---

## Setup Instructions

### Prerequisites

- **Node.js**: v16 or higher
- **Package Manager**: npm, yarn, or pnpm

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/davidmerid/nooro-to-do-app-frontend.git
   cd todo-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure Environment Variables**

   - Create a `.env.local` file based on `.env.local.example`.
   - Add necessary environment variables (e.g., API base URL).

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

   - Open [http://localhost:3000](http://localhost:3000) to view the app.

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

---

## Key Files and Features

### Configuration

- **`package.json`**: Contains dependencies and project scripts.
- **`tailwind.config.ts`**: Configures TailwindCSS, including theme extensions.
- **`.env.local`**: Stores environment-specific variables (e.g., API base URL).

### App-Level Files

- **`layout.tsx`**: Root layout for the app.
- **`page.tsx`**: Home page that dynamically renders tasks or task creation UI.
- **`global.css`**: Includes global TailwindCSS styles.

### Components

- **`Header.tsx`**: Displays the app's header with branding.
- **Task Form**:
  - **`Color-picker.tsx`**: Component for selecting a color for tasks.
  - **`Index.tsx`**: Main task form to create tasks.
- **Task List**:
  - **`Task-card.tsx`**: Displays individual tasks with toggle and delete options.
  - **`Task-counter.tsx`**: Shows total and completed tasks.
  - **`Task-empty.tsx`**: Empty state message for when no tasks exist.

### Hooks

- **`use-create-task.ts`**: Custom hook for creating tasks, including validation.
- **`use-tasks.ts`**: Fetches tasks and provides toggle and delete functionality.

### Utilities

- **`baseAPI.ts`**: Axios instance with default configurations.
- **`query-provider.tsx`**: React Query provider with default settings and DevTools.
- **`tasksAPI.ts`**: API methods for interacting with tasks (CRUD operations).
- **`utils.ts`**: Utility function `cn` to merge and manage class names.

### Types

- **`index.ts`**: Type definitions for tasks and related components.

---

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to check for code issues.

---

## Environment Variables

Environment variables should be added to the `.env.local` file. An example file (`.env.local.example`) is provided for reference.

- **Example Variable**:
  ```plaintext
  NEXT_PUBLIC_API_BASE_URL=https://api.example.com
  ```

Replace placeholders with actual values for your environment.

---
