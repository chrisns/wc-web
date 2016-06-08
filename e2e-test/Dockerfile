FROM node:latest

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json package.json

RUN npm install && npm cache clean

COPY . .
