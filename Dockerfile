FROM node:lts-buster

RUN git clone https://github.com/Gsbxh/api  /root/V1P3R

WORKDIR /root/V1P3R

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install

CMD ["node", "server.js"]
