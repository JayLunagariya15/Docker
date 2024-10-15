Here’s the updated `README.md` file for your React application, specifying that Node.js version should be 16.x.

---

# React Application - Docker Setup

This project is a React application that is packaged and served using NGINX in a Docker container.

## Prerequisites

Before you can build and run the application, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (version 20.10 or higher)
- [Node.js](https://nodejs.org/) (version 16.x recommended for local development, optional)

## Steps to Build and Run

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t react-app .
   ```

3. **Run the Docker container**:
   ```bash
   docker run -d -p 8080:80 react-app
   ```

4. **Access the Application**:
   Open a web browser and navigate to `http://localhost:8080` to view your React application.

## Dockerfile Explanation

- **Base Image (Build Stage)**:
  - The first stage uses `node:16.17.0-alpine` as the base image. It sets the working directory to `/todoapp`, copies all project files into the container, and installs the necessary dependencies using `npm install`. It then builds the application using `npm run build`.

- **Base Image (Runtime Stage)**:
  - The second stage uses `nginx:stable-alpine` as the base image. It copies the built React application from the previous stage to the NGINX HTML directory (`/usr/share/nginx/html/`), where it will be served.

## Additional Notes

- If you make changes to the application, repeat the build and run steps to see the updates.
- For local development, ensure you are using Node.js version **16.x** and run the application with:
  ```bash
  npm start
  ```

---

This `README.md` file now includes the requirement for Node.js version 16.x. Feel free to adjust any specific details as necessary for your project!
