FROM node:14-alpine AS builder

ENV NODE_ENV production
ENV REACT_APP_CSB_BASE_URL "https://csb.briang.tech"

# Add a work directory
WORKDIR /csf

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /csf/build /usr/share/nginx/html

# Add your nginx.conf
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
