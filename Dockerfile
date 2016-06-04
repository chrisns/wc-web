FROM node:0.10

RUN mkdir -p /home/app

COPY bundle /home/app

WORKDIR /home/app

RUN cd programs/server && npm install

CMD node main.js