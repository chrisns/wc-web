FROM node:latest

RUN echo 'deb http://packages.linuxmint.com debian import' >> /etc/apt/sources.list

RUN apt-get update && \
  apt-get install -y --force-yes \
    nginx \
    xvfb \
    openjdk-7-jre \
    firefox \
    vim

RUN rm -r /var/www/html

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json package.json

RUN npm install

COPY . .

RUN xvfb-run npm test

RUN npm run build

RUN ln -s /home/app/build /var/www/html

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
