FROM node:21-alpine3.18

RUN apk add --no-cache udev ttf-freefont chromium \
  && rm -rf /var/cache/apk/*

WORKDIR /home/nb6vac/

COPY index.js package.json package-lock.json /home/nb6vac/

RUN npm install
