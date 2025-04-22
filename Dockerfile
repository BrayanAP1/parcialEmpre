# Etapa 1: construir el proyecto con Maven y JDK 17
FROM maven:3.8.7-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Etapa 2: ejecutar la app con JDK 17
FROM eclipse-temurin:17
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8104
ENTRYPOINT ["java", "-jar", "app.jar"]