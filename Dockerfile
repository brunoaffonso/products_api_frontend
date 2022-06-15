FROM node:alpine
WORKDIR /app
COPY package.json ./
# COPY package-lock.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
CMD ["yarn", "start"]