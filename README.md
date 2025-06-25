# Feature-Based Architecture with Redux Toolkit & TypeScript

## 📁 Project Structure Overview

```typescript
src/
│
├── app/                          # Global app configuration
│   ├── store.ts                  # Redux store setup
│   ├── rootReducer.ts            # Combined reducers
│   └── hooks.ts                  # Typed Redux hooks
│
├── features/                     # Feature modules
│   └── [feature-name]/           # Example: "users"
│       ├── components/           # Feature-specific components
│       ├── pages/                # Full page components
│       ├── hooks/                # Custom hooks (feature logic)
│       ├── services/             # API calls & services
│       └── slices/               # Redux state management
│
├── shared/                       # Reusable code
│   ├── components/               # Shared UI components
│   ├── hooks/                    # Global custom hooks
│   ├── utils/                    # Helper functions
│   └── types/                    # Global TypeScript types
│
├── App.tsx                       # Root component
└── main.tsx                      # Entry point
```

## 📌 Key Directories Explained

### 1. `/app/` - Core Configuration

| File             | Purpose                                                            |
| ---------------- | ------------------------------------------------------------------ |
| `store.ts`       | Configures Redux store with middleware (RTK Query, Thunk, etc.).   |
| `rootReducer.ts` | Combines all feature reducers into a single root reducer.          |
| `hooks.ts`       | Exports pre-typed `useAppDispatch` and `useAppSelector` for Redux. |

### 2. `/features/[feature-name]/` - Modular Features

Each feature is self-contained and includes:

| Subdirectory  | Contents                                                           |
| ------------- | ------------------------------------------------------------------ |
| `components/` | Reusable UI components specific to the feature (e.g., `UserCard.tsx`). |
| `pages/`      | Top-level page components (e.g., `UserProfilePage.tsx`).               |
| `hooks/`      | Custom hooks for feature logic (e.g., `useUserAuth.ts`).              |
| `services/`   | API calls (e.g., `userService.ts` with Axios/fetch).                   |
| `slices/`     | Redux Toolkit slices for state management (e.g., `userSlice.ts`).  |

**Example Feature (users):**

```typescript
// features/users/slices/usersSlice.ts
export const usersSlice = createSlice({
  name: "users",
  initialState: { loading: false, data: [] },
  reducers: {
    // ...actions
  },
});
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
