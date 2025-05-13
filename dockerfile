# Usa a imagem oficial do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Instala o nodemon globalmente
RUN npm install -g nodemon

# Copia o restante do código
COPY . .

# Expõe a porta que o app usa
EXPOSE 3000

# Comando para iniciar o servidor com nodemon
CMD ["nodemon", "src/index.js"]
