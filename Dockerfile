FROM maven:latest AS Build
WORKDIR /app
COPY . .
RUN mvn clean package

FROM tomcat:alpine
COPY --from=Build /app/target/JavaLoginShowcase-1.0.0.war /usr/local/tomcat/webapps/
CMD ["catalina.sh", "run"]