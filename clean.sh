 #!/bin/bash          

echo Cleaning up...

cd ./dist
rm -rf .git
rm -rf .idea
rm -f *.sh *.bat *.log build*.* package.json *.MD .gitignore
cd ..

echo Build Finished!