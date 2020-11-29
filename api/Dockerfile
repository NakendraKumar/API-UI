FROM node:12

RUN mkdir /app
WORKDIR /app


COPY ./package.json ./package-lock.json ./
RUN npm ci

EXPOSE 4000
CMD ["npm", "start"]
