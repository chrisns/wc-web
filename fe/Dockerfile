FROM node:latest

RUN apt-get update && apt-get install -y \
  nginx

RUN rm -r /var/www/html

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json package.json

RUN npm install

COPY . .

#RUN npm test

RUN npm run build

RUN ln -s /home/app/build /var/www/html

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
