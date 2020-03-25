FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install --production

COPY . /app
