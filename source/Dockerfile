FROM node:9.11.1-alpine


# Create app directory
RUN mkdir -p /app
COPY . /app
WORKDIR /app

# Install app dependencies
RUN apk update && apk upgrade && apk add git

RUN npm install
# Build app
RUN npm run build

ENV NODE_ENV production
ENV HOST 0.0.0.0

EXPOSE 3000

# start command
CMD [ "npm", "start" ]
