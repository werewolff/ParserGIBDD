FROM ubuntu:18.04
# ubuntu setup
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y cron
RUN apt-get install nodejs -y && apt-get install npm -y
# install curl
RUN apt-get install curl -y
# setup working directory
WORKDIR /usr/parser
# copy
COPY ./src/cron /etc/cron.d/parser
COPY package*.json ./
COPY ./src ./src
# install dependences
RUN npm install
#bind crontab task
RUN chmod 0644  /etc/cron.d/parser
RUN crontab /etc/cron.d/parser
# run cron
CMD ["/bin/bash", "-c", "cron -f"]
# expose port
EXPOSE 8080

