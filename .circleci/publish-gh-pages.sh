# set up git config
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

# checkout & pull gh-pages branch
git checkout gh-pages
git pull origin gh-pages

# remove all files except the generated public directory and required git folders
find . -maxdepth 1 ! -name 'public' ! -name '.circleci' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;

# move generated public in the root folder and remove the empty generated public folder
mv public/* .
rm -R public/

# commit and push
git add -fA
git commit --allow-empty -m "update gh pages [ci skip]"
git push origin gh-pages

echo "deployed successfully"