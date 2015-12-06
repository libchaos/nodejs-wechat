FROM daocloud.io/node:4.2.3
WORKDIR /demo
RUN npm install
EXPOSE 80
CMD npm start
