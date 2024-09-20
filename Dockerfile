FROM nginx:alpine

WORKDIR /abhi

COPY *.html /usr/share/nginx/html/

