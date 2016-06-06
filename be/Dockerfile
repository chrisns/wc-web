FROM node:latest

RUN mkdir -p /home/app

WORKDIR /home/app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm test
RUN NODE_ENV=production npm prune

CMD npm start