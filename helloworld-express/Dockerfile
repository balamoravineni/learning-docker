# 1st stage -- build
FROM node:22 AS build
#set working directory
WORKDIR /app
# copy package.json, package-lock.json along with source code & tsconfig.json
COPY . .
# install the deps
RUN npm ci
# transpile source code from ts to js
RUN npm run build
# 2nd stage --runtime (distroless image for less size & more security)
FROM gcr.io/distroless/nodejs22 AS runtime
#set working directory
WORKDIR /app
# copy package.json, package-lock.json
COPY --from=build app/node_modules node_modules
# copy transpiled code (js) instead of source code (ts)
COPY --from=build app/dist dist
#expose application port
ENV PORT=3000
# buid & run
CMD ["dist/index.js"]