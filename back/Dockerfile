# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY ./package*.json ./


# Instala las dependencias
RUN npm install 

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre la app (por ejemplo, 3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
