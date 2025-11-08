FROM node:20-alpine
# /app is created by default in the node image

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Execute tests with specific Jest configuration
RUN npm run test -- --maxWorkers=1

# Start the application
CMD ["node", "app.js"]
