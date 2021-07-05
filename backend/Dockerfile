FROM openjdk:18-ea-4-jdk-oraclelinux8
VOLUME  /tmp
ADD target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]