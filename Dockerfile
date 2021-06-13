FROM node:lts-stretch

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

ENV PORT 5000

EXPOSE ${PORT}

CMD [ "npm", "start" ]