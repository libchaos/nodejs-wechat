FROM node:0.8-onbuild
WORKDIR ./demo
RUN npm install
EXPOSE 80
