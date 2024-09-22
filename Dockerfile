FROM node:16.17.0-alpine AS build

WORKDIR /todoapp

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm run export

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /todoapp/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
