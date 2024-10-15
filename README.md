# Portfolio Website - Docker Setup

This project is a portfolio website built with Next.js, packaged and served using NGINX in a Docker container.

## Prerequisites

Before you can build and run the application, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (version 20.10 or higher)
- [Node.js](https://nodejs.org/) (for local development, optional)

## Steps to Build and Run

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t portfolio-website .
   ```

3. **Run the Docker container**:
   ```bash
   docker run -d -p 8080:80 portfolio-website
   ```

4. **Access the Portfolio**:
   Open a web browser and navigate to `http://localhost:8080` to view your portfolio website.

## Dockerfile Explanation

- **Base Image (Build Stage)**:
  - The first stage uses `node:16.17.0-alpine` as the base image to build the application. It sets the working directory to `/todoapp`, copies `package*.json` files, and runs `npm install` to install dependencies. It then copies the rest of the application files and runs `npm run build` followed by `npm run export` to create a static version of the site.

- **Base Image (Runtime Stage)**:
  - The second stage uses `nginx:stable-alpine` as the base image. It clears the default NGINX HTML directory and copies the static output from the build stage to the NGINX directory.

- **Command**:
  - The command `CMD ["nginx", "-g", "daemon off;"]` is used to start the NGINX server in the foreground.

## Additional Notes

- If you make changes to the application, repeat the build and run steps to see the updates.
- For local development, you can run the application with Node.js using:
  ```bash
  npm run dev
  ```
