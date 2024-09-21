FROM node:16.17.0-alpine AS minicontainer

WORKDIR /todoapp

COPY . .

RUN npm install
RUN npm run build


FROM nginx:stable-alpine
COPY --from=minicontainer /todoapp/build/ /usr/share/nginx/html/