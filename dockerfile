# Imagen base
FROM node:18


WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .

# puerto
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]
