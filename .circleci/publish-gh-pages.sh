# set up git config
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

# checkout & pull gh-pages branch
git checkout gh-pages
git pull origin gh-pages

# remove all files except the generated site directory and required git folders
find . -maxdepth 1 ! -name '_site' ! -name '.circleci' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;

# move generated site in the root folder and remove the empty generated site folder
mv _site/* .
rm -R _site/

# commit and push
git add -fA
git commit --allow-empty -m "update gh pages"
git push origin gh-pages

echo "deployed successfully"