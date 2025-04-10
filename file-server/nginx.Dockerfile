FROM docker.io/nginx:1.21.5-alpine

COPY nginx/nginx-ssl.site.default.conf /etc/nginx/conf.d/default.conf

# Copy the Let's Encrypt certificates
COPY nginx/certs/fullchain.pem /etc/nginx/certs/fullchain.pem
COPY nginx/certs/privkey.pem /etc/nginx/certs/privkey.pem

EXPOSE 80
EXPOSE 443
