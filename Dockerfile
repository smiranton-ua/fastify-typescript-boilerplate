FROM node:carbon

WORKDIR /app

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 8080
