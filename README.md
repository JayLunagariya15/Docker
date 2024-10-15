# JavaLoginShowcase - Docker Setup

This project is a Java-based web application featuring a login page, packaged as a WAR file and deployed on an Apache Tomcat server within a Docker container.

## Prerequisites

Before you can build and run the application, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started) (version 20.10 or higher)
- [Maven](https://maven.apache.org/download.cgi) (for local builds, optional)

## Steps to Build and Run

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t javaloginshowcase .
   ```

3. **Run the Docker container**:
   ```bash
   docker run -d -p 8080:8080 javaloginshowcase
   ```

4. **Access the Application**:
   Open a web browser and navigate to `http://localhost:8080/JavaLoginShowcase-1.0.0` to access the login page.

## Dockerfile Explanation

- **Base Image (Build Stage)**:
  - The first stage uses `maven:latest` as the base image to build the application. It sets the working directory to `/app`, copies all project files, and runs `mvn clean package` to create the WAR file.

- **Base Image (Runtime Stage)**:
  - The second stage uses `tomcat:alpine` as the base image. It copies the generated WAR file from the build stage into the Tomcat webapps directory (`/usr/local/tomcat/webapps/`).

- **Command**:
  - The command `CMD ["catalina.sh", "run"]` is used to start the Tomcat server.

## Additional Notes

- Ensure your `pom.xml` is correctly configured to build the WAR file. The default artifact ID should match the name used in the `Dockerfile` (`JavaLoginShowcase-1.0.0.war`).
- If you make changes to the application, repeat the build and run steps to see the updates.

---

This `README.md` file provides all the necessary instructions and details for users to successfully build and run your Java application using Docker. Adjust any specific details as needed for your project.
