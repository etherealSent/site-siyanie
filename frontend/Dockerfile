# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
# Install dependencies
RUN npm ci

RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --configuration=production

# Stage 2: Serve the React application with Nginx
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/first-app/browser /usr/share/nginx/html

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# docker build -t first-app-nodejs .
# docker run -d -p 8080:80 first-app-nodejs