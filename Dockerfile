FROM node:22.14-slim

WORKDIR /nodecg

RUN apt-get update && apt-get install -y python3 build-essential git

WORKDIR /nodecg/bundles

RUN git clone -b build https://github.com/speedcontrol/nodecg-speedcontrol.git
WORKDIR /nodecg/bundles/nodecg-speedcontrol
RUN npm i --omit=dev

WORKDIR /nodecg
COPY . .
RUN npm ci

EXPOSE 9090

CMD ["nodecg", "start"]