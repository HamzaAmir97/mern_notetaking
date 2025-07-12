# 📝 MERN Stack Note Taking App ✨

A full-stack note-taking application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project serves as a great starting point for beginners looking to understand full-stack development, REST API creation, and real-world concepts like rate limiting.

## Demo App

[Link to your live demo here]() <!-- TODO: Add live demo link -->

## Highlights

- 🧱 Full-Stack App Built with the MERN Stack (MongoDB, Express, React, Node)
- ✨ Create, Update, and Delete Notes with Title & Description
- 🛠️ Build and Test a Fully Functional REST API
- ⚙️ Rate Limiting with Upstash Redis — a Real-World Concept Explained Simply
- 🚀 Completely Responsive UI
- 🌐 Explore HTTP Methods, Status Codes & SQL vs NoSQL
- 📦 Deployment Guide Included — Add the Live App to Your Resume
- 📚 Designed for Absolute Beginners

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-based like MongoDB Atlas)
- [Upstash Redis](https://upstash.com/) account for rate limiting

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/HamzaAmir97/mern_notetaking.git
    cd mern_notetaking
    ```

2.  **Set up Environment Variables (.env Setup):**

    In the `/backend` directory, create a file named `.env` and add the following environment variables.

    ```env
    # /backend/.env

    MONGO_URI=<your_mongo_uri>

    UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
    UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

    NODE_ENV=development
    ```

    - `MONGO_URI`: Your MongoDB connection string.
    - `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`: Your credentials from your Upstash Redis database.
    - `NODE_ENV`: Set to `development` for local development.

3.  **Install dependencies:**

    Install dependencies for both the frontend and backend.
    ```sh
    npm install --prefix backend && npm install --prefix frontend
    ```

### Running the Application for Development

Run the backend and frontend servers in separate terminals.

#### 🔧 Run the Backend

```sh
cd backend
npm run dev
```
The backend server will typically start on `http://localhost:5000`.

#### 💻 Run the Frontend

```sh
cd frontend
npm run dev
```
The React development server will start, usually on `http://localhost:3000`.

## Deployment

The root `package.json` contains scripts to help with a production build and deployment.

1.  **Build for Production:**
    This command installs all dependencies (if not already installed) and creates a production build of the React frontend.
    ```sh
    npm run build
    ```

2.  **Start the Production Server:**
    This command starts the Node.js/Express server. It's intended to be used in a production environment where it can serve the static frontend files from the backend.
    ```sh
    npm run start
    ```