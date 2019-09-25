#!/bin/bash

# set up git config
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

# when site is built, we format using prettier the rules directory, which might create changes
# these changes have to be reset before changing branches
# the changes are only for files within `_rules` directory, so resetting just those changes
git checkout -- package-lock.json
git checkout -- _rules

# checkout & pull master branch
git checkout master
git pull origin master

# remove all files except the generated public directory and required git folders
find . -maxdepth 1 ! -name 'public' ! -name 'node_modules' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;	

# move generated public in the root folder and remove the empty generated public folder
mv public/* .
rm -R public/

# commit and push
git add -A
git commit --allow-empty -m "update site [ci skip]"
git push origin master --no-verify

echo "Site deployed successfully"