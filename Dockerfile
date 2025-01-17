# build stage
FROM node:20.10.0 as build-stage

ARG APP_VERSION

WORKDIR /app
COPY . .

RUN node --version
RUN npm --version

RUN npm install
RUN npm run build
RUN echo "<!-- build-info: $APP_VERSION-->" >> /app/dist/index.html

# production stage
FROM nginx:stable-alpine as production-stage
COPY server.conf /etc/nginx/conf.d/server.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]