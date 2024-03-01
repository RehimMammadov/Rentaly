# Use an official Node.js runtime as a base image
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port that your NestJS app will run on
EXPOSE 5500

# Command to run your NestJS app
CMD ["npm", "run", "start:dev"]
