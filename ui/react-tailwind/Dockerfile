# Use Node.js v18 as base image
FROM node:18

# Set working directory inside the container
WORKDIR /travel-site-project/ui/react-tailwind/

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Expose port 80
EXPOSE 80

# Command to run the React app
CMD ["npm", "run", "start"]
