
FROM node:12.16.1-alpine3.10
WORKDIR /app
RUN apk add g++ make py3-pip
COPY package.json /app
RUN npm install --only=production
COPY . /app
EXPOSE 5000
CMD ["npm", "start"]