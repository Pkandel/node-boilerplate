#take default image of node
FROM node:7.10.0

MAINTAINER Prakash Kandel <unique_prakash2002@yahoo.com>

#create app directory in container
RUN mkdir -p /app

#set app directory as default working directory
WORKDIR /app

#copy all fies from current directory to /app container
COPY package.json /app

RUN npm install
RUN npm install babel-cli -g

# copy rest of the project
COPY . /app
RUN npm run build

#expose port 4000 to outside world
EXPOSE 28080
 
#cmd to start 
CMD ["npm", "start"]
