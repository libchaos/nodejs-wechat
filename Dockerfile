FROM daocloud.io/node:4.2.3
WORKDIR /app
COPY ./demo/package.json /app/
RUN npm install
COPY ./demo/ /app/
EXPOSE 80
CMD npm start
