FROM node:latest

RUN mkdir -p /home/app

WORKDIR /home/app
COPY package.json package.json
RUN npm install && npm cache clean
COPY . .
RUN npm test

ENV NODE_ENV production
#RUN npm prune

CMD npm start
