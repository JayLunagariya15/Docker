# Registration Form - Docker Setup

This project contains a registration form (index.html) served by an NGINX web server running on an Alpine Linux Docker container.

## Prerequisites

To successfully build and run the Docker container, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (version 20.10 or higher)

## Steps to Build and Run

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t registration-form .
   ```

3. **Run the Docker container**:
   ```bash
   docker run -d -p 8080:80 registration-form
   ```

4. **Access the registration form**:
   Open a browser and go to `http://localhost:8080` to view the registration form.

## Dockerfile Explanation

- **Base Image**: The Dockerfile uses the `nginx:alpine` image, which is a lightweight version of NGINX on Alpine Linux.
- **Working Directory**: It sets `/abhi` as the working directory.
- **HTML Copy**: The `*.html` files are copied into the NGINX web server's default directory (`/usr/share/nginx/html/`).

---

This will provide users with all the necessary instructions to get your Docker setup running smoothly.
