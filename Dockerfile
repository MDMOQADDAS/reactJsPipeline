FROM node:alpine
WORKDIR /myapp

COPY package*.json /

COPY . .

RUN npm i
RUN npm build

EXPOSE 3000


CMD ["npm", "start"]
