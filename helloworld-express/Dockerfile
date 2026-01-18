# 1st stage -- BUILD
FROM node:22 as BUILD
#set working directory
WORKDIR /app
# copy package.json, package-lock.json
COPY package*.json .
# install the deps
RUN npm ci
# 2nd stage --RUNTIME (distroless image for less size & more security)
FROM gcr.io/distroless/nodejs22 as RUNTIME
#set working directory
WORKDIR /app
# copy package.json, package-lock.json
COPY --from=BUILD app/node_modules node_modules
# copy source code
COPY src src
#expose application port
ENV PORT=3000
# buid & run
CMD ["src/index.js"]