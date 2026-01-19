# 1. Build our production bundle
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
# 2. Serve static files with an http server like nginx
FROM nginx:1.27.0 AS runtime
COPY --from=build /app/build /usr/share/nginx/html