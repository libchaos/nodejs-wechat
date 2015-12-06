#! /bin/bash
echo '111'
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
# source ~/.bashrc 
# bash && nvm install 4.2

if [ $? -eq 0 ];then

  echo '命令正确的分支'
else
  echo '命令失败的分支'
fi

# rm -rf ~/.nvm
# bash


# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

# source ~/.bashrc 
# sleep 2
# nvm install 4.2
# nvm alias default 4.2
# node -v
# npm i -g nrm
# nrm use taobao
# nrm ls 
