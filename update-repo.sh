#!/bin/bash

BASE_FOLDER=/root/www/mis-docs
DST_FOLDER=/var/www/cv
mkdir -p $DST_FOLDER

dotlockfile -l -r 0 -p $DST_FOLDER/file.lock || exit                                                                                

cd $BASE_FOLDER
git pull

cp -R $BASE_FOLDER/resume/* $DST_FOLDER/
cp $BASE_FOLDER/conf/cv.conf /etc/apache2/sites-enabled/

service apache2 restart

dotlockfile -u $DST_FOLDER/file.lock

tailf /var/log/syslog


