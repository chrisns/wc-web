FROM node:latest

#RUN wget -q -O - "https://dl-ssl.google.com/linux/linux_signing_key.pub" | apt-key add -
#RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list
RUN echo 'deb http://packages.linuxmint.com debian import' >> /etc/apt/sources.list


RUN apt-get update && \
  apt-get install -y --force-yes \
    xvfb \
    openjdk-7-jre \
    firefox \
#    google-chrome-stable \
    vim

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json package.json

RUN npm install

COPY . .
