# base image
FROM node:22
#set working directory
WORKDIR /app
# copy package.json, package-lock.json
COPY package*.json .
# install the deps
RUN npm ci
# copy source code
COPY src/index.js index.js
#expose application port
EXPOSE 3000
# buid & run
CMD [ "node", "index.js" ]