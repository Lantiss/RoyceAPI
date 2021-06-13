FROM node:lts-stretch

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

ENV PORT 5000
ENV BD_HOST = localhost
ENV NODE_ENV = DEV

EXPOSE ${PORT}

CMD [ "npm", "start" ]