# use node alpine base image
FROM node:alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY ./ ./

# Install dependencies
RUN npm i

# export port 8080 
EXPOSE 8080

# Build the app
CMD ["npm", "run", "start"]