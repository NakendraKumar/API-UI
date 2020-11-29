FROM node:12

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install

EXPOSE 3000
CMD npm start
