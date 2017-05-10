#take default image of node
FROM node:7.10.0

MAINTAINER Prakash Kandel <unique_prakash2002@yahoo.com>

#create app directory in container
RUN mkdir -p /app

#set app directory as default working directory
WORKDIR /app

#copy all fies from current directory to /app container
COPY . /app/

#expose port 28080
EXPOSE 28080

#cmd to start 
CMD ["npm", "start"]

