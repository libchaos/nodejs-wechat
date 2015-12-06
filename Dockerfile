FROM dockerfile/ubuntu

MAINTAINER Abhinav Ajgaonkar <abhinav316@gmail.com>

# Install Redis
RUN   \
  apt-get -y -qq install python redis-server

# Install Node
RUN   \
  cd /opt && \
  wget http://nodejs.org/dist/v4.2.1/node-v4.2.1-linux-x64.tar.gz && \
  tar -xzf node-v4.2.1-linux-x64.tar.gz && \
  mv node-v4.2.1-linux-x64 node && \
  cd /usr/local/bin && \
  ln -s /opt/node/bin/* . && \
  rm -f /opt/node-v4.2.1-linux-x64.tar.gz

# Set the working directory
WORKDIR   /src

CMD ["/bin/bash"]
