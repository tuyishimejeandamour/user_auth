
FROM node:12.16.1-alpine3.10
WORKDIR /app
COPY package.json /app
RUN npm ci --only=production --no-package-lock && npm cache clean --force
COPY . /app
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]