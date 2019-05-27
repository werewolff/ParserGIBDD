FROM ubuntu:18.04
RUN apt-get update \
    && apt-get install -y \
    cron npm nodejs curl net-tools \
    && apt-get clean

RUN mkdir -p /usr/parser
COPY package*.json /usr/parser/
COPY ./src /usr/parser/src

WORKDIR /usr/parser
RUN npm install

COPY ./src/cron /etc/cron.d/parser
RUN chmod +x /usr/parser/src/parser.sh

CMD ["/bin/bash", "-c", "cron -f"]

