FROM meteorhacks/meteord:base

RUN mkdir -p /bundle
COPY wc-web.tar.gz /bundle

