<div align="center">
  <img src="https://raw.githubusercontent.com/Nathan-SWE/movi/d193b8d5e8f2269e71650626585d7b09dfb41f89/public/movi.svg" width="120" alt="MOVI logo" />
  <h1>MOVI</h1>
  
  <p><b>Discover. Rate. Comment. Save.</b><br>
  MOVI is your space to explore movies and TV shows, leave your thoughts, and build your personal watchlist.<br>
  Whether you’re that friend who reviews every movie or just love discovering new gems, this is your new home for entertainment.</p>

  <p>🚧 <b>Status:</b> Currently in development</p>

  <br>

  <img src="https://img.shields.io/badge/in%20Development-black?style=for-the-badge&label=status&labelColor=000&color=f9ab00" />
  <img src="https://img.shields.io/github/repo-size/Nathan-SWE/movi?style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/count/Nathan-SWE/movi?style=for-the-badge" />
</div>

---

<div align="center">
  <h3>📱 Mobile Preview</h3>
  <img src="https://i.ibb.co/1tcSqnc4/Screenshot-20251017-220007-Brave.jpg" width="280" alt="MOVI mobile preview" />
</div>

---

<details>
<summary><h2>▶️ How to Run (click)</h2></summary>

Follow these instructions to set up and run the project locally for development.

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. Version `18.x` or higher is recommended. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Comes bundled with Node.js.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Nathan-SWE/movi.git
    ```

2.  **Change to project directory:**

    ```bash
    cd movi
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Environment Variables

This project requires API keys and configuration settings from external services.

1.  **Create an environment file:** In the root directory of the project, create a file named `.env.local`.
2.  **Add the following variables** to the `.env.local` file, replacing the placeholder values with your actual keys:

    ```bash
    # Firebase Configuration (Get these from your Firebase project settings)
    VITE_FIREBASE_APIKEY="YOUR_FIREBASE_API_KEY"
    VITE_FIREBASE_AUTHDOMAIN="YOUR_FIREBASE_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECTID="YOUR_FIREBASE_PROJECT_ID"
    VITE_FIREBASE_STORAGEBUCKET="YOUR_FIREBASE_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGINGSENDERID="YOUR_FIREBASE_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APPID="YOUR_FIREBASE_APP_ID"

    # TheMovieDB API Key (Get this from TMDb)
    VITE_TMDB_API_KEY="YOUR_TMDB_API_KEY"
    ```

### Running the Development Server

Once the dependencies are installed and the environment variables are set, you can start the development server:

```bash
npm run dev
```

The application will typically be available at **localhost:5173**. Open this URL in your browser.

</details>

## ⚙️ Core Stack

- **Vite + React**
- **Mantine UI**
- **Firebase Authentication + Firestore**

---

## 📦 External Libraries

- **Zustand**
- **Tanstack Query**
- **Axios**
- **React Router**
- **@tabler/icons-react**
- **zod**

---

### 🎨 Design Inspiration

[Cinemax - Movie Apps UI Kit](https://www.figma.com/community/file/1088719884686291024)
by
[Hormhy](https://hormhy.com/)

---

## ✅ TO-DO List

- [✅] Create project and set up basic configuration
- [✅] Connect to TMDB API and fetch movie data
- [✅] Configure and connect Firebase
- [✅] Authentication
  - [✅] Registration flow — users can sign up
  - [✅] Login flow — users can sign in
  - [✅] Password recovery
  - [✅] Visual feedback — display logged-in user card
  - [✅] Logout flow — clear user session
- [ ] Protected routes
- [ ] Send welcome & account confirmation emails
- [ ] ...more to come

---

# 🎯 MOVI — MVP Scope

**Deadline 💀:** October 24th, 2025

---

## 🔐 1. Authentication & User Accounts

The system must allow users to create and manage a secure, unique account.

- [✅] **Account Creation:**

  - Users can register using email and password.
  - Each email must be unique in the database.

- [✅] **Login:**

  - Users can authenticate with email/password or a **single** social provider (e.g., Google).

- [ ] **Protected Routes:**
  - Pages that require authentication (watchlists, comments, etc.) should be inaccessible to unauthenticated users, redirecting them to the login page.

---

## 🎥 2. Movie Discovery & Browsing

The app must allow any user (logged in or not) to explore movie content.

- [ ] **Home Page:**

  - Display a grid of trending or popular movies fetched from the TMDb API.

- [ ] **Search:**

  - A search bar must allow users to find movies by title.

- [ ] **Movie Details Page:**
  - Clicking a movie card opens a page with full details: poster, title, synopsis, rating, etc.

---

## 💬 3. User Interactivity (Requires Login)

Core user interaction features — CRUD-style engagement.

- [ ] **Comments System:**

  - Logged-in users can add comments to a movie’s detail page.
  - All comments are publicly visible.
  - Users can delete **only their own comments**.

- [ ] **Comment Reactions:**

  - Users can like or remove a like on any comment (including their own).

- [ ] **Movie Lists ("Watchlist" & "Watched"):**
  - Users can add/remove movies to a “Watchlist”.
  - Movies from the “Watchlist” can be marked as “Watched”.
  - Both lists are directly tied to the **user’s account**.

---

## 🚫 Out of MVP Scope

The following features are **intentionally postponed** to ensure on-time MVP delivery:

- Multiple user profiles
- Personalized movie recommendation system
- Multiple social login providers (only one for MVP)
- Social media sharing
- Notifications (Email or Web Push)

---
