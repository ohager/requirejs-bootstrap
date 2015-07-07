@echo off
echo Cleaning up...

cd ./dist
rd .git /S /Q
rd .idea /S /Q
del *.bat
del *.sh
del *.log
del build*.*
del package.json
del README.MD
del .gitignore
cd ..

echo Build Finished!