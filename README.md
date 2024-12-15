# Find a Coach

A Single Page Application (SPA) created during a Vue course.  
Available online at: [Find a Coach](https://coach-project-824fc.web.app/)

## Technologies and Tools

The project was built using:

- **Vue 3** (Frontend framework)
- **Vuex** (State management)
- **Vue Router** (SPA routing)
- **Firebase** (Backend as a Service)
  - Firebase Realtime Database
  - Firebase Authentication
  - Firebase Hosting

---

## Project Setup

### Requirements

- Node.js (v14+)
- npm or yarn
- Firebase API Key

### Setup Steps

1. **Clone the repository**  
   Copy the project to your local machine:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_PROJECT_FOLDER>

   ```

2. **Create a .env file**  
   Copy the content from the .env.example file into a new .env file:
   VUE_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY_HERE
   Replace YOUR_FIREBASE_API_KEY_HERE with your Firebase API Key.

3. **Install dependencies**  
   Run the following command to install all necessary packages:

   ```bash
   npm install

   ```

4. **Run the project locally**  
   Start the development server:

   ```bash
   npm run serve

   ```

The application will be available at:
http://localhost:8080/

5. **Build for production**  
   To create the production-ready version in the dist folder, run:

   ```bash
   npm run build

   ```

### Notes

Make sure to configure your Firebase project and provide a valid API key.
The .env file is not included in the repository for security reasons. Use .env.example as a template.
