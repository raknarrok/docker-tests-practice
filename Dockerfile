FROM node:19.2-alpine3.16
# /app is created by default in the node image

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY app.js package.json ./

# Install dependencies
RUN npm install

# Start the application
CMD ["node", "app.js"]
