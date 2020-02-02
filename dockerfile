FROM node:alpine
WORKDIR /app
EXPOSE 3000
COPY . .

RUN yarn install
CMD ["yarn","start"]
