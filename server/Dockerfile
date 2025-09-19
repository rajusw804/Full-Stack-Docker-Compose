# Stage 1: Build the app
FROM node:14 AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Stage 2: Run the app
FROM node:14

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app .

EXPOSE 3000

CMD [ "npm", "start" ]
