# ✅ Manual Test: Routing and Login Flow

This document describes the manual steps to validate the login flow with Azure AD and application routing in React with Vite and `react-router-dom`.

---

## 📌 Prerequisites

- Run the app locally(`npm/pnpm run dev` or `vite`).
- Have`msalInstance` configured with a valid `clientId`.
- Have a valid Microsoft Azure AD user.

---

## 1. App Initialization

**Step**: Open the application in the browser (`http://localhost:5173`).

**Expected result**:

- The `<LoadingSpinner />` component is displayed while `inProgress !== InteractionStatus.None`.
- If there is no active session, you will be automatically redirected to the Microsoft login screen.

---

## 2. Login with Azure AD

**Step**: Sign in with valid Microsoft credentials.

**Expected result**:

- Automatic redirection back to the app.
- The console should display: `✅ Session active: [user email]`

---

## 3. Home Page path `/`

**Step**: Verify that you are in the root directory (`/`).

**Expected result**:

- The `HomePage` loads correctly.
- The title of the document should be: `Home | Template app`.

---

## 4. Users Page path `/users`

**Step**: Navigate to `/users`.

**Expected result**:

- The `UsersPage` page is rendered.
- The title of the document should be: `Users | Template app`.

---

## 5. User Profile path `/users/:id`

**Step**: Navigate to `/users/1` (or any valid ID).

**Expected result**:

- The user profile view (`UserProfilePage`) is displayed.
- The title of the document should be: `User Profile | Template app`.

---

## 6. Not found route `/non-existing-path`

**Step**: Navigate to a non-existent route like `/non-existing-path`.

**Expected result**:

- The `NotFoundPage` is displayed inside the layout.
- This works because a wildcard route (`path: "*"`) is defined inside the main layout route at `/`.

**Note**:

- This setup allows any unmatched route under the root layout (`/`) to correctly show the 404 page.
- The `Layout` component (header, nav, etc.) remains visible even when showing the `NotFoundPage`.

---

## 7. Log out from the navigation button

**Step**:

- Click on the `Logout` button located in the upper right corner of the header.

**Expected result**:

- The current session in Azure AD is terminated.
- The user is automatically redirected to the Microsoft login screen.
- Upon completing the login again, the authentication flow restarts normally.

**Additional notes**:

- This button executes `authController.logout()`, which invokes `msalInstance.logoutRedirect()`.
- You can verify that the session was terminated if accounts is empty after redirecting.

---

## 8. Edge Case - Invalid Session

**Step**: Simulate a corrupted session (delete `accounts` in DevTools) and refresh.

**Expected result**:

- No active account detected.
- Automatically redirected to login.
- No error displayed in console.

---

## ✅ Final Checklist

| Case                                 | Expected result                   | Works? |
| ------------------------------------ | --------------------------------- | ------ |
| Spinner visible during loading       | `<LoadingSpinner />` is displayed | ✔ / ✘  |
| Redirect to login without session    | Redirects to Azure login page     | ✔ / ✘  |
| Login with a valid account           | App loads with active session     | ✔ / ✘  |
| `/` shows `HomePage`                 | Correct title, no errors          | ✔ / ✘  |
| `/users` shows `UsersPage`           | Correct title, data is visible    | ✔ / ✘  |
| `/users/:id` shows `UserProfilePage` | Profile is visible, correct title | ✔ / ✘  |
| Invalid route                        | `NotFoundPage` is displayed       | ✔ / ✘  |
| Logout clears session                | User is forced to log in again    | ✔ / ✘  |

---

**Notes**:

- Ensure accessibility is respected with `role="status"` and `aria-live="polite"` during loading states.
- Verify that `RouterProvider` is not rendered until login is ready (`initialized === true` and `inProgress === InteractionStatus.None`).
