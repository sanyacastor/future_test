FROM mhart/alpine-node:10 AS builder
WORKDIR /app
COPY package.json .

RUN yarn install
COPY . .
CMD ["yarn","start"]




# CMD ["serve", "-p", "80", "-s", "."]