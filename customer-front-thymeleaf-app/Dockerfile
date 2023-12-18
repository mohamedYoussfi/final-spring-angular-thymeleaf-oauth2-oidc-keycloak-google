FROM openjdk:21-oracle
VOLUME /tmp
COPY target/*.jar  app.jar
ENTRYPOINT ["java","-jar", "app.jar"]