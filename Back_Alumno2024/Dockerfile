# Iimagen base con JDK 11

FROM openjdk:11-jdk-slim


# Establece el directorio de trabajo

WORKDIR /app


# Nombre del jar del proyecto al contenedor

COPY target/Back_Alumno2024-0.0.1-SNAPSHOT.jar app.jar


# Expone el puerto

EXPOSE 8082


# Comando para ejecutar la aplicación

CMD ["java", "-jar", "app.jar"]