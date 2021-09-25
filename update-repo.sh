#!/bin/bash

BASE_FOLDER=/root/www/mis-docs
DST_FOLDER=/var/www/cv
mkdir -p $DST_FOLDER

dotlockfile -l -r 0 -p $DST_FOLDER/file.lock                                                                           
if [ $? -eq 0 ]; then
  cd $BASE_FOLDER
  
  echo Descartando cambios
  git stash

  echo Actualizando
  git pull
  
  echo Set perms
  chmod +x ./update-repo.sh

  echo Sync folders
  cp -R $BASE_FOLDER/resume/* $DST_FOLDER/
  cp $BASE_FOLDER/conf/cv.conf /etc/apache2/sites-enabled/

  echo Restart apache
  service apache2 restart

  echo unlock
  dotlockfile -u $DST_FOLDER/file.lock
  
  echo tailf
  tail -f /var/log/syslog
fi



