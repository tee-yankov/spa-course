#! /usr/bin/env bash

sudo apt-get update
sudo apt-get install -y python-software-properties
sudo apt-add-repository -y ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs
cd /vagrant
sudo npm install -g bower
npm install
bower install --allow-root --config.interactive=false
sudo npm install -g forever
forever start server/server.js
