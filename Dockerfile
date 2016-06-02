FROM node:6.2.0

#RUN apt-get update && apt-get install -y \
#    sudo

ADD https://install.meteor.com/install-meteor.sh /tmp
RUN sh /tmp/install-meteor.sh

RUN mkdir -p /home/app/build

RUN useradd app && \
#    usermod -aG sudo app && \
    chown -R app:app /home/app

USER app


WORKDIR /home/app/build

COPY package.json .
RUN npm install

COPY .meteor .meteor
COPY packages packages

ENV LC_ALL en_US.UTF-8
#RUN meteor lint

COPY . .

#RUN npm test