FROM node:lts-alpine3.17
WORKDIR /myapp
COPY build/* /myapp/
RUN npm i
CMD ["node", "start"]