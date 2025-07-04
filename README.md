# 🧱 Feature-Based Architecture (MVC-inspired) with Redux Toolkit & TypeScript

This project is structured using a **feature-based architecture** inspired by the **MVC (Model-View-Controller)** pattern. It is designed for **modularity**, **scalability**, and **maintainability** in modern front-end applications.

- **Model**: Business logic and data handling is encapsulated in `models/`, including slices (state), services (logic), and repositories (API access).
- **View**: UI elements are built in `views/` and `components/`, providing user-facing pages and reusable components.
- **Controller**: Coordinating logic lives in `controllers/`, bridging views and models, managing actions and decisions.

Built with **Redux Toolkit**, **TypeScript**, and **React Router**, this architecture promotes clean separation of concerns while keeping related logic grouped by feature.

## 📁 Project Structure Overview

```ts
src/                                # Source code root folder
│
├── app/                            # Global application settings
│   ├── routes/                     # Configuring routes with React Router
│   └── store/                      # Global state store configuration
│
├── features/                       # Modules with domain-specific logic
│   ├── [feature-name]/             # [feature-name] management module, example "users"
│   │   ├── components/             # Reusable components not visible in the UI
│   │   ├── controllers/            # Logic and data management for [feature-name]
│   │   ├── hooks/                  # Custom hooks for the [feature-name] module
│   │   ├── models/                 # Module models and business logic
│   │   │   ├── repositories/       # Communication with API or other data sources
│   │   │   ├── services/           # Reusable business logic services
│   │   │   └── slices/             # Slices from Redux or other local module state
│   │   ├── tests/                  # Specific tests for the [feature-name] module
│   │   ├── types/                  # Types, interfaces, for this module
│   │   └── views/                  # Module views (screens or pages)
│   │       ├── components/         # Reusable visual components for views
│   │       └── pages/              # Specific pages of the [feature-name] module
│   └── .../                        # Structure similar to [feature-name] with other modules
│
├── lib/                            # Libraries and general utilities
│   ├── api/                        # Axios/global API configuration or instances
│   ├── config/                     # Environment and app-level config
│   └── utils/                      # General-purpose utility functions
│
├── shared/                         # Shared, cross-feature resources
│   ├── components/                 # Reusable not UI components
│   ├── hooks/                      # Common hooks
│   ├── icons/                      # Custom SVG/JS icons
│   ├── styles/                     # Global styles (e.g., Tailwind)
│   ├── tests/                      # Shared test helpers/mocks
│   ├── types/                      # Global TypeScript types
│   └── views/                      # Shared layouts and UI elements
│       ├── components/             # Common visual elements (e.g., buttons)
│       ├── layouts/                # Layout wrappers (e.g., AdminLayout)
│       └── pages/                  # Global pages (e.g., NotFound)
│
├── types/                          # Global `.d.ts` declaration files
│
├── App.tsx                         # App root component
└── main.tsx                        # Entry point for Vite
```

## 📌 Key Directories Explained

### 1. `app/` – Core Configuration

#### `app/store/` – Redux Store Setup

| File             | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `store.ts`       | Configures the Redux store with middleware (e.g., RTK Query, Thunk). |
| `rootReducer.ts` | Combines all feature reducers into a single root reducer.            |
| `hooks.ts`       | Exports pre-typed Redux hooks: `useAppDispatch`, `useAppSelector`.   |

#### `app/routes/` – Route Definitions

| File       | Purpose                                                         |
| ---------- | --------------------------------------------------------------- |
| `index.ts` | Centralized route configuration for the app using React Router. |

### 2. `/features/[feature-name]/` - Modular Features

Each feature is self-contained and includes:

| Subdirectory   | Contents                                                                 |
| -------------- | ------------------------------------------------------------------------ |
| `components/`  | Reusable UI elements for the feature (e.g., UserCard.tsx).               |
| `controllers/` | Handles logic and side effects (e.g., orchestrating fetches, UI events). |
| `hooks/`       | Custom React hooks specific to the feature (e.g., useUserAuth.ts).       |
| `models/`      | Contains repositories/, services/, and slices/ for business logic.       |
| `tests/`       | Unit/integration tests for this module.                                  |
| `types/`       | Interfaces and types for this feature (e.g., IUser.ts).                  |
| `views/`       | Contains pages/ and their visual components/.                            |

**Example Slice (users):**

```ts
// features/users/models/slices/usersSlice.ts
const usersSlice = createSlice({
  name: "users",
  initialState: { loading: false, data: [] },
  reducers: {
    // ...actions
  },
});

export default usersSlice.reducer;
```

**Example Component (Feature):**

```ts
// features/users/views/components/UserCard.tsx
function UserCard({ user }: { user: IUser }) {
  return <div>{user.name}</div>;
}
export default UserCard;
```

**Example Page (Feature View):**

```ts
// features/users/views/pages/UserListPage.tsx

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchUsers } from "@/features/users/models/slices/usersSlice";
import UserCard from "../components/UserCard";
import LoadingSpinner from "@/shared/views/components/common/LoadingSpinner";
import ErrorMessage from "@/shared/views/components/error/ErrorMessage";

function UserListPage() {
  const dispatch = useAppDispatch();
  const {
    data: users,
    loading,
    error,
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load users." />;

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserListPage;
```

## 📌 Naming conventions

Consistent naming improves readability and reduces friction in large codebases.

| Type             | Convention           | Example            |
| ---------------- | -------------------- | ------------------ |
| Component        | `PascalCase.tsx`     | `UserCard.tsx`     |
| Page             | `PascalCase.tsx`     | `UserListPage.tsx` |
| Custom Hook      | `useCamelCase.ts`    | `useFetchUsers.ts` |
| Slice (Redux)    | `{entity}Slice.ts`   | `userSlice.ts`     |
| Service/API Call | `{entity}Service.ts` | `userService.ts`   |
| CSS File         | `PascalCase.css`     | `UserCard.css`     |
| Interface/Type   | `IPascalCase.ts`     | `IUser.ts`         |
| Utility Function | `camelCase.ts`       | `formatDate.ts`    |

## 🌐 Routes

All routes are defined centrally (e.g. routes.ts) and follow kebab-case for URL consistency.

```ts
// app/routes/index.tsx
<Route path="/user-list" element={<UserListPage />} />
```

## 🧪 Testing

- Unit and integration tests are located in each feature’s `tests/` folder.
- Reusable test utilities can be placed in `shared/tests/` folder.
- Test utilities are named with the `.test.ts` or `.test.tsx` suffix.

## ✅ Benefits of This Architecture

- 🔁 Reusability – Shared modules promote DRY principles.
- 🧩 Scalability – Easy to add new features without affecting others.
- 🧠 Maintainability – Clear separation of concerns and modular structure.
- 🔒 Type Safety – Built fully with TypeScript, reducing runtime errors.
