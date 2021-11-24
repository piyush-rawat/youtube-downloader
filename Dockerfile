FROM    node:12.18.0
WORKDIR /app
COPY    . .
RUN     npm install --silent --prefix ./FRONTEND/ \
        && npm run build --silent --prefix ./FRONTEND/ \
        && cd FRONTEND \
        && rm -r node_modules \
        && mv build ../BACKEND/ \
        && npm install --silent --prefix ../BACKEND/
WORKDIR /app/BACKEND/
CMD     ["node","server.js"]