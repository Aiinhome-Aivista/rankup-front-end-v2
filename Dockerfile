# STAGE 1: Build the React Application
FROM node:18-alpine as builder

WORKDIR /app

# Copy package files first (better caching)
COPY package.json package-lock.json ./

# Install dependencies strictly from the lockfile
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the project (creates the 'dist' folder)
RUN npm run build


# STAGE 2: Serve with Nginx (Production Ready)
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the React build output from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]