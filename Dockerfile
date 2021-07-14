FROM node:14.16.0-alpine
WORKDIR /src
COPY . /src
CMD ["npm", "run" , "start:dist"]
EXPOSE 80
