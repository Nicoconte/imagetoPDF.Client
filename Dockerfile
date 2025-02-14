FROM node:alpine

# Create app directory
WORKDIR /usr/src/docker-react-sample

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . ./
RUN npm install


#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000
CMD [“npm”, “start”]