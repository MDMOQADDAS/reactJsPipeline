FROM node:lts-alpine3.17
WORKDIR /myapp
COPY build/* /myapp/
CMD ["npm", "start"]
