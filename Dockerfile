FROM  nikolaik/python-nodejs:latest AS build

COPY . /usr/local/src

RUN cd /usr/local/src && \
       npm install  && \
       npm run build


FROM nginx:1.21.4-alpine

COPY --from=build /usr/local/src/build/ /web

COPY ./default.conf /etc/nginx/conf.d/default.conf

WORKDIR /web

EXPOSE 80
